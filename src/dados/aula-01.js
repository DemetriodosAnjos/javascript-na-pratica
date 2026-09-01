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
  regraNegocio: {
    titulo: "Checklist da Aula 01",
    tarefas: [
      {
        id: 1,
        texto:
          "1. Seleciona [document.getElementById( )] o elemento [container-pai] no HTML e o armazena na constante [containerPai]",
        concluida: false,
      },
      {
        id: 2,
        texto:
          "2. Cria um elemento <div> [document.createElement( )] na memória para ser o card principal do menu e o armazena na constante [cardMenu]",
        concluida: false,
      },
      {
        id: 3,
        texto:
          "3. Adiciona a classe [classList.add( )] CSS [card-menu] ao elemento const [cardMenu] recém-criado",
        concluida: false,
      },
      {
        id: 4,
        texto:
          "4. Cria um elemento <div> [document.createElement( )] na memória para funcionar como o cabeçalho do menu e o armazena na constante [menuHeader]",
        concluida: false,
      },
      {
        id: 5,
        texto:
          "5. Adiciona a classe [classList.add( )] CSS [menu-header] a este cabeçalho",
        concluida: false,
      },
      {
        id: 6,
        texto:
          "6. Cria um elemento <span> [document.createElement( )] na memória para armazenar o texto descritivo e o armazena na constante [textoDescritivo]",
        concluida: false,
      },
      {
        id: 7,
        texto:
          "7. Define o texto [.textContent = ''] que aparecerá visível na const [textoDescritivo] dentro deste span ['Clique no chevron para expandir']",
        concluida: false,
      },
      {
        id: 8,
        texto:
          "8. Cria um elemento [document.createElement( )] <span> na memória para representar o ícone de seta e o armazena na constante [iconeChevron]",
        concluida: false,
      },
      {
        id: 9,
        texto:
          "9. Adiciona a classe [classList.add( )] CSS 'menu-icon' para estilizar o ícone",
        concluida: false,
      },
      {
        id: 10,
        texto:
          "10. Insere [innerHTML = ''] o caractere de seta para baixo [▼] como conteúdo HTML dentro do span do ícone",
        concluida: false,
      },
      {
        id: 11,
        texto:
          "11. Insere [appendChild()] o span da const [textoDescritivo] dentro da div do cabeçalho [menuHeader]",
        concluida: false,
      },
      {
        id: 12,
        texto:
          "12. Insere [appendChild()] o span da const [iconeChevron] também dentro da div do cabeçalho [menuHeader]",
        concluida: false,
      },
      {
        id: 13,
        texto:
          "13. Cria [document.createElement('')] um elemento <div> na memória para guardar o conteúdo expansível do menu e o armazena na constante [menuContent]",
        concluida: false,
      },
      {
        id: 14,
        texto:
          "14. Adiciona [classList.add('')] a classe CSS 'menu-content' para estruturar a área de conteúdo da const [menuContent] oculto/visível",
        concluida: false,
      },
      {
        id: 15,
        texto:
          "15. Define [textContent = ''] o texto lorem ipsum na const [menuContent] que será revelado quando o menu for expandido",
        concluida: false,
      },
      {
        id: 16,
        texto:
          "16. Insere [appendChild()] a div do cabeçalho const [menuHeader] dentro do card principal do menu const [cardMenu]",
        concluida: false,
      },
      {
        id: 17,
        texto:
          "17. Insere [appendChild()] a div de conteúdo da const [menuContent] logo abaixo do cabeçalho, também dentro do card principal const [cardMenu]",
        concluida: false,
      },
      {
        id: 18,
        texto:
          "18. Insere [appendChild()] o card principal completo na página, dentro do const [containerPai]",
        concluida: false,
      },
      {
        id: 19,
        texto:
          "19. Declara a função [function + nome(){}] responsável por alternar os estados de expansão e recolhimento do menu",
        concluida: false,
      },
      {
        id: 20,
        texto:
          "20. Verifica [menuContent.classList.contains('')] se a div de conteúdo possui atualmente a classe (css) 'expandido', salvando o resultado [true ou false] na constante [estaExpandido]",
        concluida: false,
      },
      {
        id: 21,
        texto:
          "21. Condicional [if]: se o menu NÃO [operador !] + const [estaExpandido] estiver expandido [falso]",
        concluida: false,
      },
      {
        id: 22,
        texto:
          "22. Adiciona [classList.add('')] a classe 'expandido' ao conteúdo const [menuContent] para abrir o menu via CSS",
        concluida: false,
      },
      {
        id: 23,
        texto:
          "23. Adiciona [classList.add('')] a classe 'girar' ao ícone const [iconeChevron] para rotacioná-lo em 180 graus [virando para cima]",
        concluida: false,
      },
      {
        id: 24,
        texto: "24. Caso contrário [else] [se o menu já estiver expandido]",
        concluida: false,
      },
      {
        id: 25,
        texto:
          "25. Executa um pequeno atraso [setTimeout(() => {}, 10)] de 10 milissegundos antes de disparar a remoção da classe",
        concluida: false,
      },
      {
        id: 26,
        texto:
          "26. Remove [classList.remove('')] a classe [css] 'expandido' do conteúdo const [menuContent] para recolher o menu",
        concluida: false,
      },
      {
        id: 27,
        texto:
          "27. Remove [classList.remove('')] imediatamente a classe [css] 'girar' do ícone const [iconeChevron] para fazê-lo voltar à posição original",
        concluida: false,
      },
      {
        id: 28,
        texto:
          "28. Adiciona um ouvinte [addEventListener('click', + function )] de evento de clique especificamente na const [iconeChevron], disparando a função alternarMenu quando clicado",
        concluida: false,
      },
    ],
  },
};
