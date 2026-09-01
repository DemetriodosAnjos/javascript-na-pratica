import { listaDeAulas } from "./js/aulas.js";
import { iniciarMenuExpansivo } from "./js/menuExpansivo.js";

const videoWrapper = document.getElementById("video-wrapper");
const videoInfoWrapper = document.getElementById("video-info-wrapper");
const timestampsList = document.getElementById("timestamps-list");
const moduleList = document.getElementById("module-list");
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// 1. Função que renderiza a aula na tela (com suporte a tempo inicial opcional)
function renderizarAula(aula, tempoInicio = 0) {
  // Trata os códigos separados de forma segura
  if (typeof aula.codigo === "object" && aula.codigo !== null) {
    const htmlEl = document.getElementById("code-html-output");
    const cssEl = document.getElementById("code-css-output");
    const jsEl = document.getElementById("code-js-output");

    if (htmlEl) htmlEl.textContent = aula.codigo.html;
    if (cssEl) cssEl.textContent = aula.codigo.css;
    if (jsEl) jsEl.textContent = aula.codigo.js;
  }

  const startParam =
    tempoInicio > 0 ? `?start=${tempoInicio}&autoplay=1&mute=1` : "";

  videoWrapper.innerHTML = `
        <iframe src="https://www.youtube.com/embed/${aula.id}${startParam}" 
                title="${aula.titulo}" 
                frameborder="0"
                allow="autoplay" 
                allowfullscreen>
        </iframe>
    `;

  videoInfoWrapper.innerHTML = `
        <span class="badge">${aula.modulo}</span>
        <h1>${aula.titulo}</h1>
        <p>${aula.descricao}</p>
    `;

  timestampsList.innerHTML = aula.timestamps
    .map(
      (ts) => `
        <li><button data-time="${ts.segundos}">${ts.tempo} - ${ts.label}</button></li>
    `,
    )
    .join("");

  // Garante que o container do checklist exista na tela e reinicializa o componente
  let checklistContainer = document.getElementById("checklist-container");
  if (!checklistContainer) {
    // Se por acaso a section sumiu do DOM, recria ela dinamicamente na main
    const mainContent = document.querySelector(".content-area");
    const section = document.createElement("section");
    section.className = "business-rules-section";
    section.innerHTML = `<h3>Passo a Passo da Regra de Negócio</h3><div id="checklist-container"></div>`;
    mainContent.appendChild(section);
  } else {
    // Limpa o conteúdo anterior para evitar duplicar listas ao trocar de aula
    checklistContainer.innerHTML = "";
  }

  // Inicializa o componente dentro do container atualizado
  iniciarMenuExpansivo("#checklist-container");
}

// 2. Função que renderiza a lista de módulos no menu lateral
function renderizarMenu() {
  moduleList.innerHTML = listaDeAulas
    .map(
      (aula, index) => `
        <li><a href="#" data-index="${index}" class="${index === 0 ? "active" : ""}">${aula.modulo}: ${aula.titulo}</a></li>
    `,
    )
    .join("");
}

// 3. Evento de clique no Menu Lateral (Global)
moduleList.addEventListener("click", (e) => {
  const link = e.target.closest("a");
  if (!link) return;

  e.preventDefault();

  document
    .querySelectorAll(".module-list a")
    .forEach((a) => a.classList.remove("active"));
  link.classList.add("active");

  const index = link.getAttribute("data-index");
  renderizarAula(listaDeAulas[index]);

  if (window.innerWidth < 768) {
    sidebar.classList.remove("active");
  }
});

// 4. Evento de clique nos Timestamps (Global - Evita duplicação)
timestampsList.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const segundos = btn.getAttribute("data-time");
  const indexAtivo = document
    .querySelector(".module-list a.active")
    .getAttribute("data-index");
  const aulaAtual = listaDeAulas[indexAtivo];

  renderizarAula(aulaAtual, segundos);
});

// 5. Botão Menu Hambúrguer (Mobile)
menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// Inicialização da Aplicação
renderizarMenu();
renderizarAula(listaDeAulas[0]);
