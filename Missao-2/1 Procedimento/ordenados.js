/**
 * ! funcionalidades gerais seguem a seguinte ordem : Add, Ordenar, Misturar.
 */

const shuffle = (listUser, qtrocas) => {
  const length = listUser.length;
  const copy = listUser;
  for (let i = 0; i < qtrocas; i++) {
    const index1 = Math.floor(Math.random() * length);
    const index2 = Math.floor(Math.random() * length);

    // Realiza a troca dos elementos nas posições index1 e index2
    [copy[index1], copy[index2]] = [copy[index2], copy[index1]];
  }

  return copy;
};

const bubble_sort = (listUser) => {
  let vtemporario = 0;
  let comprimento = listUser.length;
  for (let item = 0; item < comprimento; item++) {
    for (
      let comparador = 0;
      comparador < comprimento - item - 1;
      comparador++
    ) {
      if (listUser[comparador] > listUser[comparador + 1]) {
        vtemporario = listUser[comparador];
        listUser[comparador] = listUser[comparador + 1];
        listUser[comparador + 1] = vtemporario;
      }
    }
  }
  return listUser;
};
const selection_sort = (listUser) => {
  const comprimento = listUser.length;

  for (let item = 0; item < comprimento - 1; item++) {
    let menorIndice = item;

    // menor idice da lista não ordenada
    for (let comparador = item + 1; comparador < comprimento; comparador++) {
      if (listUser[comparador] < listUser[menorIndice]) {
        menorIndice = comparador;
      }
    }

    // Troca o menor elemento com o primeiro elemento não ordenado
    if (menorIndice !== item) {
      const vtemporario = listUser[item];
      listUser[item] = listUser[menorIndice];
      listUser[menorIndice] = vtemporario;
    }
  }

  return listUser;
};

const quick_sort = (listUser, pos1, pos2) => {
  if (pos1 < pos2) {
    let pivotIndex = particionamento(listUser, pos1, pos2);
    quick_sort(listUser, pos1, pivotIndex - 1);
    quick_sort(listUser, pivotIndex + 1, pos2);
  }
  return listUser;
};
const particionamento = (listUser, pos1, pos2) => {
  let pivot = listUser[pos2];
  let iterador = pos1 - 1;
  for (let j = pos1; j < pos2; j++) {
    if (listUser[j] <= pivot) {
      iterador++;
      [listUser[iterador], listUser[j]] = [listUser[j], listUser[iterador]];
    }
  }
  [listUser[iterador + 1], listUser[pos2]] = [
    listUser[pos2],
    listUser[iterador + 1],
  ];
  return iterador + 1;
};

/**
 * TODO Adicionando funções de buttons
 */

function add() {
  let listaValores = document.getElementById("valores");
  let valor = document.getElementById("valor");
  let node = document.createElement("li");
  node.setAttribute("id", "item");
  node.textContent = `${valor.value}`;
  listaValores.appendChild(node);
  valor.value = "";
  valor.focus();
}

function ordenar() {
  var vetor = [];
  let listaValores = document.getElementById("valores");
  // RETORNO DE VETOR
  for (var i = 0; i < listaValores.children.length; i++) {
    var item = listaValores.children[i];
    var valorConteudo = item.innerHTML;
    var valorInteiro = eval(valorConteudo);
    vetor.push(valorInteiro);
  }

  // CONFIRMAÇÃO DE LISTA VALIDA
  var listaSelecaoOrdenacao = document.getElementById("Select_opcion");

  var indiceSelecionado = listaSelecaoOrdenacao.selectedIndex;

  if (indiceSelecionado === 0) {
    bubble_sort(vetor);

    let listaOrdenada = vetor.map((numero) => numero);

    let novaLista = listaOrdenada.reduce((elementoLi, numero) => {
      return elementoLi + `<li>${numero}</li>`;
    }, "");

    document.getElementById("valores").innerHTML = novaLista;
  } else if (indiceSelecionado === 1) {
    selection_sort(vetor);
    let listaOrdenadaSelect = vetor.map((numero) => numero);

    let novaListaSelect = listaOrdenadaSelect.reduce((elementoLi, numero) => {
      return elementoLi + `<li>${numero}</li>`;
    }, "");
    document.getElementById("valores").innerHTML = novaListaSelect;
  } else if (indiceSelecionado === 2) {
    quick_sort(vetor, 0, vetor.length - 1);

    let listaOrdenadaSelect = vetor.map((numero) => numero);

    let novaListaSelect = listaOrdenadaSelect.reduce((elementoLi, numero) => {
      return elementoLi + `<li>${numero}</li>`;
    }, "");
    document.getElementById("valores").innerHTML = novaListaSelect;
  }
}

function misturar() {
  var vetor = [];
  var lista = document.getElementById("valores");
  if (lista.innerHTML === "") {
    alert("impossivel , misturar lista vazia ");
  }
  for (var i = 0; i < lista.children.length; i++) {
    var item = lista.children[i];
    var valorConteudo = item.innerHTML;
    var valorInteiro = eval(valorConteudo);
    vetor.push(valorInteiro);
  }
  console.log(vetor);

  shuffle(vetor, 3);
  let listaOrdenadaSelect = vetor.map((numero) => numero);

  let novaListaSelect = listaOrdenadaSelect.reduce((elementoLi, numero) => {
    return elementoLi + `<li>${numero}</li>`;
  }, "");
  lista.innerHTML = novaListaSelect;
}

const limpar = document.getElementById("limpar");

limpar.addEventListener("click", () => {
  let listaValores = document.getElementById("valores");
  listaValores.innerHTML = "";
});
