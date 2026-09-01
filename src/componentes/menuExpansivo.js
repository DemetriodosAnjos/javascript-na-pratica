export function iniciarMenuExpansivo(seletorContainerPai, dadosRegraNegocio) {
  const containerPai = document.querySelector(seletorContainerPai);
  if (!containerPai) return;

  // Limpa o container caso já tenha algo renderizado anteriormente
  containerPai.innerHTML = "";

  // Se a aula não possuir regras de negócio cadastradas, encerra a execução com segurança
  if (!dadosRegraNegocio) return;

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

  // 3. Injeção de textos do cabeçalho vindos do contrato
  textoDescritivo.textContent = dadosRegraNegocio.titulo || "Lista de Tarefas";
  iconeChevron.innerHTML = "▼";

  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo-container");

  const listaTarefas = document.createElement("ul");
  listaTarefas.classList.add("todo-list");

  // 4. Renderiza as tarefas recebidas via parâmetro
  const tarefas = dadosRegraNegocio.tarefas || [];

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
      // Define dinamicamente o max-height com base na altura real do conteúdo interno
      menuContent.style.maxHeight = menuContent.scrollHeight + "px";
      iconeChevron.classList.add("girar");
    } else {
      // Reseta a altura para 0 antes de remover a classe para garantir a animação de fechamento
      menuContent.style.maxHeight = "0px";
      setTimeout(() => {
        menuContent.classList.remove("expandido");
      }, 10);
      iconeChevron.classList.remove("girar");
    }
  }

  // 7. Evento de clique no cabeçalho ou ícone
  menuHeader.addEventListener("click", alterarMenu);
}
