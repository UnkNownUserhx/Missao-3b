const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você precisa escolher uma arquitetura para um novo sistema web. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Arquitetura monolítica.",
                afirmacao: "A arquitetura monolítica é mais simples de implementar inicialmente, mas pode tornar o sistema mais difícil de escalar e manter no futuro. Depende da complexidade do sistema.",
                pontos: 0
            },
            {
                texto: "Arquitetura de microsserviços.",
                afirmacao: "A arquitetura de microsserviços facilita a escalabilidade e manutenção do sistema, mas pode aumentar a complexidade de desenvolvimento e requer mais experiência da equipe. Boa escolha para sistemas complexos.",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Sua equipe está enfrentando dificuldades para manter a qualidade do código. O que você faz?",
        alternativas: [
            {
                texto: "Implementa revisões de código e integrações contínuas.",
                afirmacao: "A implementação de revisões de código e integrações contínuas ajuda a manter a qualidade do código e detectar problemas cedo. Excelente prática!",
                pontos: 1
            },
            {
                texto: "Aumenta o prazo de entrega para permitir mais testes manuais.",
                afirmacao: "Aumentar o prazo pode aliviar a pressão temporariamente, mas não resolve o problema subjacente de manutenção de qualidade. Uma abordagem menos eficaz.",
                pontos: 0
            }
        ]
    },
    {
        enunciado: "Você precisa escolher um banco de dados para um sistema de alta performance. Qual você escolhe?",
        alternativas: [
            {
                texto: "Banco de dados relacional (SQL).",
                afirmacao: "Um banco de dados relacional é uma boa escolha para sistemas que precisam de consistência e integridade transacional, mas pode não ser ideal para sistemas que exigem alta escalabilidade horizontal.",
                pontos: 0
            },
            {
                texto: "Banco de dados NoSQL.",
                afirmacao: "Um banco de dados NoSQL é uma excelente escolha para sistemas que requerem alta escalabilidade e flexibilidade de schema, mas pode não oferecer o mesmo nível de consistência transacional que um banco relacional.",
                pontos: 1
            }            
        ]
    },
    {
        enunciado: "Um cliente solicita uma nova funcionalidade crítica com um prazo curto. Como você lida com isso?",
        alternativas: [
            {
                texto: "Aceita o prazo e adiciona a nova funcionalidade rapidamente.",
                afirmacao: "Adicionar rapidamente pode levar a problemas de qualidade e aumentar a dívida técnica. Uma solução que precisa de cuidado.",
                pontos: 0
            },
            {
                texto: "Negocia o prazo ou simplifica o escopo da funcionalidade.",
                afirmacao: "Negociar prazos ou simplificar o escopo é uma abordagem sensata para manter a qualidade e evitar dívida técnica. Boa escolha!",
                pontos: 1
            }
        ]
    },
    {
        enunciado: "Sua equipe está dividida entre usar Scrum ou Kanban. Como você decide?",
        alternativas: [
            {
                texto: "Escolhe Scrum para fornecer estrutura e sprints definidos.",
                afirmacao: "Scrum é ótimo para equipes que precisam de um framework estruturado e ciclos de entrega curtos. Excelente para projetos bem definidos.",
                pontos: 1
            },
            {
                texto: "Escolhe Kanban para permitir flexibilidade e fluxo contínuo.",
                afirmacao: "Kanban é ótimo para equipes que preferem um fluxo contínuo e adaptação rápida às mudanças. Ideal para equipes que lidam com tarefas variáveis.",
                pontos: 1
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        caixaResultado.textContent = "Você concluiu o quiz! " + historiaFinal;
    }
}

mostraPergunta();
