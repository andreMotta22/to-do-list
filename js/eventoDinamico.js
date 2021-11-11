/**
 * essa função serve para "atribuir" eventos ao objetos criados dinamicamente
 * pela funcao criaTarefa(). o conceito é simples, como os elementos que provem
 * da função criaTarefa vem depois do javascript ja ter sido carregado,
 * obviamente que não podemos lhe atribuir nenhum evento. Sendo assim
 * podemos atribuir eventos em um unico elemento que sempre vai estar
 * presente num documento html que é ele mesmo(document). Depois de
 * entendermos isso, vamos atribuir um evento de click no document, assim toda
 * vez que houver um click nós vamos verificar aonde foi o clique(se foi
 * num btn de remover ou checkbox). por isso que o "atribuir" está entre
 * aspas, pois os elementos só aparentam que receberam um evento
 *
 *
 */
function opcoes(e) {
  // caso seja um botão
  if (e.target.classList.contains("remove")) {
    let btns = document.querySelectorAll(".remove");
    btns.forEach((btn, indice) => {
      if (btn == e.target) {
        remove(indice);
      }
    });
    // caso seja um checkbox
  } else if (e.target.classList.contains("checkbox")) {
    let checkboxs = document.querySelectorAll(".checkbox");
    checkboxs.forEach((box, indice) => {
      if (box == e.target) {
        concluido(indice);
      }
    });
  }
}
/** talvez uma outra forma interessante seria utilizar o change
 * no document, assim toda vez que houvesse uma mudança poderiamos adicionar um
 * evento
 */
document.addEventListener("click", opcoes);
