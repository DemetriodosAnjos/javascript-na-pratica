export const aula02 = {
  id: "Rx9LEK4doLU",
  modulo: "Módulo 2",
  titulo: "Como criar um alternador de tema com JS, HTML e CSS",
  descricao: "Passo a passo prático abordando constantes, funções, métodos...",
  timestamps: [
    { tempo: "00:00", segundos: 0, label: "Introdução" },
    { tempo: "01:40", segundos: 100, label: "Estrutura HTML" },
    { tempo: "11:15", segundos: 675, label: "Estilos CSS" },
    { tempo: "13:48", segundos: 828, label: "Script JS" },
  ],
  codigo: {
    html: `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alternador de Tema</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      <div>
        <h1>Alternador de Tema</h1>
        <p>Este é um exemplo prático pra entender a lógica do DOM.</p>
        <button id="themeToggleDark">Tema Dark</button>
        <button id="themeToggleRed">Tema Red</button>
      </div>
    </main>

    <script src="script.js"></script>
  </body>
</html>
`,
    css: `:root {
  --bg-color: #ffffff;
  --header-color: #121212;
  --text-color: #333333;
  --btn-bg: #007bff;
  --btn-text: #ffffff;
}

body.dark-theme {
  --bg-color: #1a1a1a;
  --header-color: #121212;
  --text-color: #f0f0f0;
  --btn-bg: #bb86fc;
  --btn-text: #121212;
}

body.red-theme {
  --bg-color: #640000;
  --header-color: #121212;
  --text-color: #f0f0f0;
  --btn-bg: #bb86fc;
  --btn-text: #121212;
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
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.container {
  text-align: center;
}

button {
  background-color: var(--btn-bg);
  color: var(--btn-text);
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
}
`,
    js: `const botaoTema = document.getElementById("themeToggleDark");
const botaoRed = document.getElementById("themeToggleRed");

const corpoDaPagina = document.body;

botaoTema.addEventListener("click", function () {
  corpoDaPagina.classList.toggle("dark-theme");
});

botaoRed.addEventListener("click", function () {
  corpoDaPagina.classList.toggle("red-theme");
});
`,
  },

  regraNegocio: {
    titulo: "Checklist da Aula 02",
    tarefas: [
      {
        id: 1,
        texto:
          "Crie uma const chamada de [`botãoTema`] selecione [document.getElementById( )] o botão de tema escuro no HTML através do seu ID [themeToggeDark] e o armazena na constante",
        concluida: false,
      },
      {
        id: 2,
        texto:
          "Crie uma const chamada de [`botãoRed`] selecione [document.getElementById( )] o botão de tema vermelho no HTML através do seu ID [`themeToggleRed`] e o armazena na constante",
        concluida: false,
      },
      {
        id: 3,
        texto:
          "Crie uma const chamada [corpoDaPagina] selecione [document.body] diretamente a tag  de todo o documento HTML e a armazena na constante",
        concluida: false,
      },
      {
        id: 4,
        texto:
          "No escopo (dentro) da função, utilize a constante [corpoDaPagina] com o método [classList.toggle(`dark-theme`)] para alternar a classe `dark-theme` no corpo da página quando o evento for acionado",
        concluida: false,
      },
      {
        id: 5,
        texto:
          "Na constante [botaoRed], adicione um [addEventListener(`click`, function () {})] ouvinte de eventos contendo a declaração da função para aguardar o usuário clicar no Tema Red",
        concluida: false,
      },
      {
        id: 6,
        texto:
          "No escopo (dentro) da função, utilize a constante [corpoDaPagina] com o método [classList.toggle(´red-theme´)] para alternar a classe ´red-theme´ no corpo da página quando o evento for acionado",
        concluida: false,
      },
    ],
  },
};
