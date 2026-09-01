export function renderizarMenu(listaDeAulas, aoSelecionarAula) {
  const moduleList = document.getElementById("module-list");
  if (!moduleList) {
    console.warn("Elemento #module-list não encontrado no DOM.");
    return;
  }

  const modulosMap = {};

  listaDeAulas.forEach((aula, index) => {
    if (!modulosMap[aula.modulo]) {
      modulosMap[aula.modulo] = [];
    }
    modulosMap[aula.modulo].push({ ...aula, originalIndex: index });
  });

  moduleList.innerHTML = Object.entries(modulosMap)
    .map(([nomeModulo, aulasDoModulo], modIndex) => {
      const descricaoModulo =
        aulasDoModulo[0].moduloDescricao || "Fundamentos e Prática";

      return `
          <li class="module-item ${modIndex === 0 ? "expandido" : ""}">
            <button class="module-btn" data-module="${modIndex}">
              <span class="module-title-text">${nomeModulo}: <small>${descricaoModulo}</small></span>
              <span class="module-chevron">▼</span>
            </button>
            
            <ul class="submenu-list">
              ${aulasDoModulo
                .map(
                  (aula) => `
                <li>
                  <a href="#" data-index="${aula.originalIndex}" class="${aula.originalIndex === 0 ? "active" : ""}">
                    Aula - ${aula.titulo}
                  </a>
                </li>
              `,
                )
                .join("")}
            </ul>
          </li>
        `;
    })
    .join("");

  // Remove listeners anteriores clonando o elemento para evitar duplicação ou falha de escopo
  const novoModuleList = moduleList.cloneNode(false);
  moduleList.parentNode.replaceChild(novoModuleList, moduleList);

  novoModuleList.innerHTML = moduleList.innerHTML;

  novoModuleList.addEventListener("click", (e) => {
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
    novoModuleList
      .querySelectorAll("a")
      .forEach((a) => a.classList.remove("active"));
    link.classList.add("active");

    const index = link.getAttribute("data-index");
    if (typeof aoSelecionarAula === "function") {
      aoSelecionarAula(index);
    }

    const sidebar = document.getElementById("sidebar");
    if (window.innerWidth < 768 && sidebar) {
      sidebar.classList.remove("active");
    }
  });
}
