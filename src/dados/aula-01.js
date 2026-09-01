export const aula01 = {
  id: "qQi4HkEoggM",
  modulo: "Módulo 1",
  titulo: "Como criar um menu expansivo com JS, HTML e CSS",
  descricao: "Passo a passo prático abordando constantes, funções, métodos...",
  timestamps: [
    { tempo: "00:00", segundos: 0, label: "Introdução" },
    { tempo: "04:00", segundos: 240, label: "Estrutura HTML" },
    { tempo: "23:00", segundos: 1380, label: "Estilos CSS" },
    {
      tempo: "33:20",
      segundos: 1992,
      label: "Importância da Regra de Negócio",
    },
    { tempo: "37:47", segundos: 2248, label: "Script JS 01 a 07" },
    { tempo: "54:37", segundos: 3262, label: "Script JS 08 a 14" },
    { tempo: "01:06", segundos: 3960, label: "Script JS 15 a 22" },
    { tempo: "01:30", segundos: 5400, label: "Script JS 16 a 28" },
  ],
  codigo: {
    html: `<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Menu Expansivo</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      <h1 class="title-h1">Menu Expansivo</h1>
      <div id="container-pai">
        <!--Aqui o js vai injetar os conteúdos-->
      </div>
    </main>
    <script src="script.js"></script>
  </body>
</html>`,
    css: `:root {
  --bg-color: #ffffff;
  --header-color: #121212;
  --text-color: #333333;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
  margin: 0;
}

.title-h1 {
  margin-left: 20px;
}

.card-menu {
  background-color: #f2f3f7;
  max-width: 600px;
  border-radius: 8px;
  margin: 16px;
  overflow: hidden;
}

.menu-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.menu-content {
  max-height: 0;
  opacity: 1;
  overflow: hidden;
  padding: 0px 20px;
  transition: max-height 0.4s ease, opacity 0.4s ease, padding 0.4s ease;
}

.menu-content.expandido {
  max-height: 250px;
  opacity: 1;
  padding: 16px 20px;
  background-color: var(--bg-color);
}

.menu-icon {
  transition: transform 0.4s ease;
}

.menu-icon.girar {
  transform: rotate(180deg);
}`,
    js: `const containerPai = document.getElementById("container-pai");

const cardMenu = document.createElement("div");
const menuHeader = document.createElement("div");
const textoDescritivo = document.createElement("span");
const iconeChevron = document.createElement("span");
const menuContent = document.createElement("div");

cardMenu.classList.add("card-menu");
menuHeader.classList.add("menu-header");
iconeChevron.classList.add("menu-icon");
menuContent.classList.add("menu-content");

textoDescritivo.textContent = "Clique no chevron para expandir";
menuContent.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
iconeChevron.innerHTML = "▼";

menuHeader.appendChild(textoDescritivo);
menuHeader.appendChild(iconeChevron);
cardMenu.appendChild(menuHeader);
cardMenu.appendChild(menuContent);
containerPai.appendChild(cardMenu);

function alterarMenu() {
  const estaExpandido = menuContent.classList.contains("expandido");

  if (!estaExpandido) {
    menuContent.classList.add("expandido");
    iconeChevron.classList.add("girar");
  } else {
    setTimeout(() => {
      menuContent.classList.remove("expandido");
    }, 10);
    iconeChevron.classList.remove("girar");
  }
}

iconeChevron.addEventListener("click", alterarMenu);`,
  },
};
