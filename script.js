const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "Gosto de ler",
            },
            {
                texto: "Não gosto de ler",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Já tentou ler um livro?",
            },
            {
                texto: "Não tentei ler um livro",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Procurou generos que você tem afinidade?",
            },
            {
                texto: "Não procurei nada.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Um bom local para procurar é em grupos e comunidades de leitores",
            },
            {
                texto: "Não quero procurar caramba!",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Pode comecar  com leituras pequenas ",
            },
            {
                texto: "Não quero comecar já falei.",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "A leitura pode te ajudar com sintomas de ansiedade.",
            },
            {
                texto: "Não tenho interesse",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "Espero ter ajudado.",
            },
            {
                texto: "Atualize a página para começar.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();