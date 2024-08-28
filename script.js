const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no saque, qual é a sua estratégia?",
        alternativas: [
            {
                texto: "Sacar uma bola forte e rápida.",
                afirmacao: "O saque forte e rápido passou a bola pelo bloqueio e tocou o chão da quadra adversária. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Sacar uma bola curta e lenta.",
                afirmacao: "O saque curto e lento foi levantado pelo adversário, resultando em um ataque bem-sucedido. Ponto para o adversário.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "O adversário fez um ataque forte. O que você faz?",
        alternativas: [
            {
                texto: "Tenta fazer um bloqueio duplo.",
                afirmacao: "O bloqueio duplo foi eficiente e a bola voltou para a quadra adversária. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Faz uma defesa baixa e rápida.",
                afirmacao: "A defesa baixa e rápida foi boa, mas a bola foi para fora. Ponto para o adversário.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: Seu time está organizando um ataque. Qual é a sua jogada?",
        alternativas: [
            {
                texto: "Levanta a bola para o atacante principal.",
                afirmacao: "O levantamento para o atacante principal resultou em um ataque certeiro. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Faz um toque surpresa para o fundo da quadra adversária.",
                afirmacao: "O toque surpresa para o fundo da quadra adversária foi interceptado. Ponto para o adversário.",
                pontos: 0
            }            
        ]
    },
    {
        enunciado: "A bola está vindo alta e perto da rede. O que você faz?",
        alternativas: [
            {
                texto: "Tenta um ataque potente.",
                afirmacao: "O ataque potente resultou em uma bola fora. Ponto para o adversário.",
                pontos: 0
            },
            {
                texto: "Faz um toque sutil para enganar o bloqueio.",
                afirmacao: "O toque sutil enganou o bloqueio e a bola caiu na quadra adversária. Ponto para seu time!",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Você está recebendo o saque do adversário. Como você responde?",
        alternativas: [
            {
                texto: "Recebe a bola com um passe alto para organizar a jogada.",
                afirmacao: "O passe alto organizou a jogada e resultou em um bom ataque. Ponto para seu time!",
                pontos: 1
            },
            {
                texto: "Recebe a bola com uma manchete baixa e rápida.",
                afirmacao: "A manchete baixa e rápida resultou em um erro e a bola não passou. Ponto para o adversário.",
                pontos: 0
            }
        ]
    }
];

const atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++;
    mostraPergunta();
}

mostraPergunta();