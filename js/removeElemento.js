// remove a tarefa do board e do array listaDeTarefas
function remove(indice) {
  if (window.confirm("deseja realmente excluir está tarefa ? ")) {
    // listaDeTarefas;
    var tarefas = document.querySelectorAll(".tarefa");
    // remove da pagina
    tarefas[indice].remove();
    // remove do array
    listaDeTarefas.splice(indice, 1);
    console.log(listaDeTarefas);
    salvaLocalStorage(listaDeTarefas);
  }
}
