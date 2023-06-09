// Organizando Dados

const receitas = [
  {
    id: "1",
    imagem: "./imagens/bolo_pao_de_queijo.png",
    titulo: "Bolo de Pão de queijo",
    ingredientes: [
      "1 xícara de chá de água (ou leite)",
      "1/2 xícara de chá de óleo (ou manteiga)",
      "50 gramas de queijo parmesão ralado",
      "3 xícaras de chá de polvilho doce",
      "1 colher de sopa (rasa) de fermento químico em pó",
      "1 colher de chá (rasa) de sal",
    ],
    mp: "Em um liquidificador, coloque os ovos, a água, o óleo, o queijo, uma xícara de polvilho e bata por 2 minutos, Adicione o restante do polvilho, o fermento, o sal e bata por mais 1 minutos, Raspe as laterais do copo do liquidificador e bata por mais 5 minutos,Despeje em uma assadeira com furo no meio (20X8cm) untada, polvilhada com amido de milho e leve ao forno preaquecido a 180 ºC por cerca ,de 55 minutos ou até dourar bem,Agora é só servir. Bom apetite!",
  },
  {
    id: "2",
    titulo: "Churros Caseiro",
    imagem: "./imagens/cafe_cremoso.png",
    ingredientes: [
      "500 ml de Leite",
      "200 ml de Água",
      "50 gramas de Manteiga",
      "50 gramas de Açúcar",
      "1 pitada de Sal",
      "400 gramas de Farinha de Trigo",
      "1 unidade de ovo",
    ],
    mp: "Em uma panela acrescente o leite, a água, a manteiga, o açúcar e uma pitada de sal e aguarde até essa mistura ferver, Depois coloque a farinha e misture muito bem em fogo baixo até que vire uma massa, Solve com as mãos até esfriar e na sequência coloque na batedeira com 2 ovos batidos até que fiquem consistentes, Coloque me um saco de confeitar com bico e faça seu formato, Adicione eles em óleo quente e frite muito bem, Por último passe no açúcar com canela",
  },
  {
    id: "3",
    titulo: "café cremoso",
    imagem: "./imagens/churros.png",
    ingredientes: [
      "2 xícaras (chá) cheias de açúcar (400 g)",
      "1 sachê de café solúvel (50 g)",
      "1 xícara (chá) de água fervente (240 ml)",
    ],
    mp: "Misture o açúcar com o café na tigela da batedeira, Adicione a água fervente e bata, em velocidade alta, por uns 10 a 15 minutos ou até ficar cremoso, Transfira para um pote com tampa e conserve na geladeira ou freezer, Sirva misturado a bebidas como leite, café, cappuccino ou chocolate quente.",
  },
];

function getListaIngredientes(receita) {
  const lista = receita.ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .reduce((element, poss) => element + poss, "");
  return `<ul>${lista}</ul>`;
}

function getCard(receita) {
  const listaIngredientes = getListaIngredientes(receita);

  const card = `
      <div class="card" style="width: 18rem;">
        <img src="${receita.imagem}" class="card-img-top" alt="imagem">
        <div class="card-body">
          <h3 class="card-title">${receita.titulo}</h3>
          <p class="card-text">${listaIngredientes}<hr>${receita.mp}</p>
        </div>
      </div>
    `;
  return card;
}

function preencheCatalogo() {
  const pnlCatalogo = document.getElementById("pnlCatalogo");
  const catalogoReceitas = receitas
    .map((receita) => getCard(receita))
    .reduce((element, card) => element + card, "");
  pnlCatalogo.innerHTML = catalogoReceitas;
}
