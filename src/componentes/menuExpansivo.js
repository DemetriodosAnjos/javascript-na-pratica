export function iniciarMenuExpansivo(seletorContainerPai) {
  const containerPai = document.querySelector(seletorContainerPai);
  if (!containerPai) return;

  // 1. Criação de elementos base do componente
  const cardMenu = document.createElement("div");
  const menuHeader = document.createElement("div");
  const textoDescritivo = document.createElement("span");
  const iconeChevron = document.createElement("span");
  const menuContent = document.createElement("div");

  // 2. Criação de classes CSS
  cardMenu.classList.add("card-menu");
  menuHeader.classList.add("menu-header");
  iconeChevron.classList.add("menu-icon");
  menuContent.classList.add("menu-content");

  // 3. Injeção de textos do cabeçalho
  textoDescritivo.textContent = "Lista de Tarefas";
  iconeChevron.innerHTML = "▼";

  // 4. Estruturação do Checklist de Tarefas
  const tarefas = [
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
  ];

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const listaTarefas = document.createElement("ul");
  listaTarefas.classList.add("todo-list");

  tarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");
    checkbox.checked = tarefa.concluida;

    const spanTexto = document.createElement("span");
    spanTexto.classList.add("todo-text");
    spanTexto.textContent = tarefa.texto;

    if (tarefa.concluida) {
      spanTexto.classList.add("concluida");
    }

    checkbox.addEventListener("change", () => {
      tarefa.concluida = checkbox.checked;
      if (tarefa.concluida) {
        spanTexto.classList.add("concluida");
      } else {
        spanTexto.classList.remove("concluida");
      }
    });

    item.appendChild(checkbox);
    item.appendChild(spanTexto);
    listaTarefas.appendChild(item);
  });

  todoContainer.appendChild(listaTarefas);
  menuContent.appendChild(todoContainer);

  // 5. Montagem da árvore DOM principal
  menuHeader.appendChild(textoDescritivo);
  menuHeader.appendChild(iconeChevron);
  cardMenu.appendChild(menuHeader);
  cardMenu.appendChild(menuContent);
  containerPai.appendChild(cardMenu);

  // 6. Função de controle de estado (Abrir/Fechar)
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

  // 7. Evento de clique no cabeçalho ou ícone
  menuHeader.addEventListener("click", alterarMenu);
}
