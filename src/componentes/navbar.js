export function renderizarNavbar(containerSelector = "body") {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const header = document.createElement("header");
  header.className = "navbar";
  header.innerHTML = `
      <button id="menu-toggle" class="menu-btn" aria-label="Abrir Menu">
        ☰
      </button>
      <span class="logo">JavaScript na Prática</span>
      <div class="social-links">
        <a href="#" target="_blank">YouTube</a>
      </div>
    `;

  // Insere a navbar no topo do container escolhido
  document.body.prepend(header);
}
