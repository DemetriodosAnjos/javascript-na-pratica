import { listaDeAulas } from "./src/dados/index.js";
import { iniciarMenuExpansivo } from "./src/componentes/menuExpansivo.js";
import { renderizarNavbar } from "./src/componentes/navbar.js";
import { renderizarMenu } from "./src/componentes/sidebar.js";

// 1. Renderiza a Navbar no topo primeiro
renderizarNavbar();

// 2. Captura os elementos do DOM AGORA (após a navbar existir)
const videoWrapper = document.getElementById("video-wrapper");
const videoInfoWrapper = document.getElementById("video-info-wrapper");
const timestampsList = document.getElementById("timestamps-list");
const moduleList = document.getElementById("module-list");
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menu-toggle");

// Configura o botão do menu hambúrguer com segurança
if (menuToggle && sidebar) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sidebar.classList.toggle("active");
  });
}

// Fecha o menu lateral ao clicar em qualquer lugar fora dele
document.addEventListener("click", (e) => {
  if (!sidebar || !sidebar.classList.contains("active")) return;

  const clicouNoMenu = sidebar.contains(e.target);
  const clicouNoBotao = menuToggle && menuToggle.contains(e.target);

  // Se o clique ocorreu fora da sidebar e fora do botão, recolhe o menu
  if (!clicouNoMenu && !clicouNoBotao) {
    sidebar.classList.remove("active");
  }
});

// Fechar o menu lateral (sidebar) ao clicar fora em mobile/tablet
/*document.addEventListener("click", (e) => {
  // Executa apenas em telas menores que 768px
  if (window.innerWidth >= 768) return;

  const sidebarEl = document.querySelector(".sidebar");
  const menuToggle = document.querySelector("#menu-btn"); // Confirme se o ID do botão é esse

  if (!sidebarEl || !sidebarEl.classList.contains("active")) return;

  const clicouNaSidebar = sidebarEl.contains(e.target);
  const clicouNoBotao = menuToggle && menuToggle.contains(e.target);

  // Se clicou fora da sidebar e fora do botão de abrir, fecha a gaveta
  if (!clicouNaSidebar && !clicouNoBotao) {
    sidebarEl.classList.remove("active");
  }
}); */

function mudarAba(linguagem) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelectorAll(".code-box")
    .forEach((box) => box.classList.remove("active"));

  if (linguagem === "html") {
    document.querySelector(".tab-btn:nth-child(1)")?.classList.add("active");
    document.getElementById("box-html")?.classList.add("active");
  } else if (linguagem === "css") {
    document.querySelector(".tab-btn:nth-child(2)")?.classList.add("active");
    document.getElementById("box-css")?.classList.add("active");
  } else if (linguagem === "js") {
    document.querySelector(".tab-btn:nth-child(3)")?.classList.add("active");
    document.getElementById("box-js")?.classList.add("active");
  }
}

// 1. Função que renderiza a aula na tela
function renderizarAula(aula, tempoInicio = 0) {
  if (!aula) return;

  if (typeof aula.codigo === "object" && aula.codigo !== null) {
    const htmlEl = document.getElementById("code-html-output");
    const cssEl = document.getElementById("code-css-output");
    const jsEl = document.getElementById("code-js-output");

    if (htmlEl) htmlEl.textContent = aula.codigo.html;
    if (cssEl) cssEl.textContent = aula.codigo.css;
    if (jsEl) jsEl.textContent = aula.codigo.js;
  }

  const tabButtons = document.querySelectorAll(".tab-btn");
  const codeBoxes = document.querySelectorAll(".code-box");

  tabButtons.forEach((btn, index) => {
    if (index === 0) btn.classList.add("active");
    else btn.classList.remove("active");
  });

  codeBoxes.forEach((box, index) => {
    if (index === 0) box.classList.add("active");
    else box.classList.remove("active");
  });

  const startParam =
    tempoInicio > 0 ? `?start=${tempoInicio}&autoplay=1&mute=1` : "";

  if (videoWrapper) {
    videoWrapper.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${aula.id}${startParam}" 
                title="${aula.titulo}" 
                frameborder="0"
                allow="autoplay" 
                allowfullscreen>
        </iframe>
    `;
  }

  if (videoInfoWrapper) {
    videoInfoWrapper.innerHTML = `
        <span class="badge">${aula.modulo}</span>
        <h1>${aula.titulo}</h1>
        <p>${aula.descricao}</p>
    `;
  }

  if (timestampsList && aula.timestamps) {
    timestampsList.innerHTML = aula.timestamps
      .map(
        (ts) => `
        <li><button data-time="${ts.segundos}">${ts.tempo} - ${ts.label}</button></li>
    `,
      )
      .join("");
  }

  let checklistContainer = document.getElementById("checklist-container");
  if (!checklistContainer) {
    const mainContent = document.querySelector(".content-area");
    if (mainContent) {
      const section = document.createElement("section");
      section.className = "business-rules-section";
      section.innerHTML = `<h3>Passo a Passo da Regra de Negócio</h3><div id="checklist-container"></div>`;
      mainContent.appendChild(section);
      checklistContainer = document.getElementById("checklist-container");
    }
  } else {
    checklistContainer.innerHTML = "";
  }

  // Passa o contrato de regra de negócio específico da aula atual para o componente
  if (checklistContainer) {
    iniciarMenuExpansivo("#checklist-container", aula.regraNegocio);
  }
}

// 3. Evento de clique no Menu Lateral
if (moduleList) {
  moduleList.addEventListener("click", (e) => {
    const moduleBtn = e.target.closest(".module-btn");
    if (moduleBtn) {
      e.preventDefault();
      const moduleItem = moduleBtn.closest(".module-item");
      if (moduleItem) {
        moduleItem.classList.toggle("expandido");
      }
      return;
    }

    const link = e.target.closest("a");
    if (!link) return;

    e.preventDefault();
    document
      .querySelectorAll(".module-list a")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    const index = link.getAttribute("data-index");
    renderizarAula(listaDeAulas[index]);

    if (window.innerWidth < 768 && sidebar) {
      sidebar.classList.remove("active");
    }
  });
}

// 4. Evento de clique nos Timestamps
if (timestampsList) {
  timestampsList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const segundos = btn.getAttribute("data-time");
    const activeLink = document.querySelector(".module-list a.active");
    if (!activeLink) return;

    const indexAtivo = activeLink.getAttribute("data-index");
    const aulaAtual = listaDeAulas[indexAtivo];

    renderizarAula(aulaAtual, segundos);
  });
}

// Inicialização da Aplicação
if (listaDeAulas && listaDeAulas.length > 0) {
  renderizarMenu(listaDeAulas, (index) => {
    renderizarAula(listaDeAulas[index]);
  });
  renderizarAula(listaDeAulas[0]);
}
