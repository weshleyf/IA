const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está no último minuto da final da Copa do Mundo. O time está empatado e você está com a bola. O que faz?",
        alternativas: [
            {
                texto: "Tento um drible ousado e sigo para o gol!",
                afirmacao: "Você arriscou e conseguiu passar pelos defensores. Agora está frente a frente com o goleiro!"
            },
            {
                texto: "Passo a bola para o meu companheiro de time que está melhor posicionado.",
                afirmacao: "Você fez uma jogada inteligente, seu companheiro marca o gol da vitória!"
            }
        ]
    },
    {
        enunciado: "Após a vitória, seu time é recebido como herói. O que você faz na festa de comemoração?",
        alternativas: [
            {
                texto: "Aproveito para agradecer à minha família e aos meus fãs.",
                afirmacao: "Você teve um momento emocionante com os fãs e se emocionou com o apoio de todos."
            },
            {
                texto: "Desfruto da festa com os amigos e faço novos contatos para o futuro.",
                afirmacao: "Você se divertiu muito e fez boas conexões para sua carreira no futebol."
            }
        ]
    },
    {
        enunciado: "O treinador oferece uma proposta de mudança de time, um grande desafio pela frente. Como você reage?",
        alternativas: [
            {
                texto: "Aceito a proposta e me preparo para o novo desafio!",
                afirmacao: "Você está pronto para crescer e enfrentar os maiores jogadores do mundo em um time de renome."
            },
            {
                texto: "Decido ficar no time atual e continuar ajudando meus companheiros a alcançar mais vitórias.",
                afirmacao: "Sua lealdade ao time fez a diferença. Juntos, vocês conquistam mais títulos importantes."
            }
        ]
    },
    {
        enunciado: "Depois de anos de sucesso, você começa a considerar a aposentadoria. O que você faz?",
        alternativas: [
            {
                texto: "Decido me aposentar e começar a treinar jovens promissores.",
                afirmacao: "Você começa a ensinar o que aprendeu para a nova geração de jogadores."
            },
            {
                texto: "Decido continuar jogando mais alguns anos, já que amo o futebol.",
                afirmacao: "Você continua a dar o seu melhor e mantém a forma para conquistar ainda mais títulos."
            }
        ]
    },
    {
        enunciado: "Durante uma temporada difícil, seu time começa a perder e a pressão aumenta. O que você faz?",
        alternativas: [
            {
                texto: "Reúno o time e faço uma conversa motivacional para dar a volta por cima.",
                afirmacao: "Você inspirou os colegas, que se motivaram a virar a temporada e conquistar uma vaga em competições internacionais."
            },
            {
                texto: "Luto sozinho para resolver o problema e tento marcar gols em todas as partidas.",
                afirmacao: "Você conseguiu fazer a diferença em campo, mas percebeu que o futebol é um esporte coletivo."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = '';  // Limpar as alternativas antes de adicionar novas
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada no futebol é um sucesso!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
