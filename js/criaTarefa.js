let listaDeTarefas = [];
const btnAdicionar = document.querySelector("#add");

/**tecnicamente cria a tarefa mais não a faz sozinha, sua maior responsabilidade
   é criar um objeto com as informaçaoes relacionadas a tarefa
*/
function criaTarefa() {
  // let texto = window.prompt(" ");
  let texto = document.querySelector("#textoTarefa").value;
  document.querySelector("#textoTarefa").value = "";
  // caso tenha um texto no input, nós criamos a tarefa
  if (texto) {
    let tarefa = criaBox(texto);
    let obTarefa = {
      texto: tarefa.children[0].innerText,
      status: tarefa.children[1].children[0].getAttribute("data-concluido"),
      tarefaConcluida: tarefa.getAttribute("data-tarefaConcluida"),
    };
    listaDeTarefas.push(obTarefa);
    console.log(listaDeTarefas);
    salvaLocalStorage(listaDeTarefas);
  }
}
/**  eu vou reutilizar essa função para remontar os
 * objetos que virão do localStorage. essa função pega a informação
 * da tarefa e cria um container para conter essa mesma informação*/
function criaBox(
  texto,
  status = "false",
  tarefaConcluida = ["data-tarefaConcluida", "false"]
) {
  const containerTarefas = document.querySelector("#listaTarefas");
  let tarefa = document.createElement("li");
  tarefa.classList.add("tarefa");
  tarefa.setAttribute(tarefaConcluida[0], tarefaConcluida[1]);
  tarefa.innerHTML = `<p>${texto}</p><div class="acoes">
              <div class="checkbox" data-concluido='${status}'>
              <div class="tooltip">Marcar como concluido</div>
              </div>
              <button class="remove">
                <img src="removeTarefa.png" alt="remover" />
                <div class="tooltip">Remove</div>
              </button>
            </div>`;
  containerTarefas.appendChild(tarefa);
  return tarefa;
}
btnAdicionar.addEventListener("click", criaTarefa);

/** o que eu poderia fazer para mudar isso seria algo parecido com o que eu fiz
 * com o cssCollector, que é gerar todo o conteudo da div tarefa de forma dinamica
 *  e a cada vez que um botão de excluir fosse criado, nós lhe atribuiriamos um evento.
 * algo semelhante a isto
 */

// seria interessante colocar essas duas funçoes num arquivo separado
function salvaLocalStorage(lista) {
  lista = JSON.stringify(lista);
  localStorage.setItem("objetoListaTarefas", lista);
}
function reloadLocalStorage() {
  let lista = localStorage.getItem("objetoListaTarefas");
  lista = JSON.parse(lista);
  if (lista) {
    lista.forEach((tarefa) => {
      console.log(tarefa);
      criaBox(tarefa.texto, tarefa.status, [
        "data-tarefaConcluida",
        tarefa.tarefaConcluida,
      ]);
    });
    console.log(lista);
    listaDeTarefas = lista;
  }
}
/* talvez fosse mais interessante colocar essa função no window.onload 
assim quando a pagina terminasse de ser 
carregada os objetos seriam regarregados
*/
reloadLocalStorage();
