// vai razurar o texto e marca a 'caixa' de checkbox
function concluido(indice) {
  let tarefas = document.querySelectorAll(".tarefa");
  let checkbox = document.querySelectorAll(".checkbox");
  // caso mude de ideia, pode retirar a confirmação
  if (checkbox[indice].getAttribute("data-concluido") === "true") {
    checkbox[indice].setAttribute("data-concluido", "false");
    tarefas[indice].setAttribute("data-tarefaConcluida", "false");
    listaDeTarefas[indice] = {
      texto: tarefas[indice].children[0].innerText,
      status:
        tarefas[indice].children[1].children[0].getAttribute("data-concluido"),
      tarefaConcluida: tarefas[indice].getAttribute("data-tarefaConcluida"),
    };
    salvaLocalStorage(listaDeTarefas);
  } else {
    // caso seja a primeira vez que insere o sinal de concluido, os
    // atributos serão preenchidos devidamente
    checkbox[indice].setAttribute("data-concluido", "true");
    tarefas[indice].setAttribute("data-tarefaConcluida", "true");
    // console.log(tarefas[indice]);
    listaDeTarefas[indice] = {
      texto: tarefas[indice].children[0].innerText,
      status:
        tarefas[indice].children[1].children[0].getAttribute("data-concluido"),
      tarefaConcluida: tarefas[indice].getAttribute("data-tarefaConcluida"),
    };
    console.log(listaDeTarefas[indice]);
    salvaLocalStorage(listaDeTarefas);
  }
}
