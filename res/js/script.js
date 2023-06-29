const words = [
    "abacaxi",
    "banana",
    "cachorro",
    "dado",
    "elefante",
    "fogo",
    "gato",
    "hotel",
    "igreja",
    "janela",
    "kiwi",
    "limão",
    "macaco",
    "navio",
    "oliva",
    "pato",
    "queijo",
    "rato",
    "sorvete",
    "tigre",
    "uva",
    "vaca",
    "waffle",
    "xadrez",
    "yoga",
    "zebra",
    "álcool",
    "bebida",
    "cavalo",
    "dedo",
    "eletricidade",
    "faca",
    "guitarra",
    "helicóptero",
    "impressora",
    "jornal",
    "ketchup",
    "lápis",
    "mala",
    "navalha",
    "olho",
    "piano",
    "régua",
    "sorveteria",
    "tênis",
    "universo",
    "violinista",
    "whisky",
    "xícara",
    "youtuber",
    "zumbi",
    "amarelo",
    "bola",
    "cama",
    "dinossauro",
    "escada",
    "flor",
    "gelo",
    "hamburguer",
    "internet",
    "jardim",
    "kung fu",
    "lua",
    "melancia",
    "noite",
    "ônibus",
    "pipoca",
    "queimadura",
    "rua",
    "sol",
    "tatuagem",
    "uísque",
    "vampiro",
    "xadrez",
    "yoga",
    "zebra",
    "árvore",
    "beijo",
    "carro",
    "dente",
    "elefante",
    "festa",
    "gato",
    "hora",
    "ilha",
    "jogo",
    "ketchup",
    "luz",
    "música",
    "noite",
    "olho",
    "pizza",
    "rio",
    "sol",
    "tênis",
    "uva",
    "vaca",
    "xícara",
    "yoga",
    "zoo"
  ];

function randomComparison() {
    return Math.random() - 0.5;
}

const WORD_AMOUNT = 20;
var wordSequenceDiv = document.getElementById('word-sequence');
var wordSequence = words.sort(randomComparison).slice(0, WORD_AMOUNT);

for (let word of wordSequence) {
    wordSequenceDiv.innerHTML += (wordSequence.indexOf(word)+1) + ". " + word +'<br>'
}

var checkbox = document.getElementById('esconder-checkbox');
var button = document.getElementById('gerar-button')

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      wordSequenceDiv.style.display = 'none'
    } else {
      wordSequenceDiv.style.display = 'block'
    }
});
