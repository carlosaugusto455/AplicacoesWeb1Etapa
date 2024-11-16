let perguntaAtual = document.getElementById('perguntaAtual');
let pergunta = document.getElementById('perguntaText');
let resp1 = document.getElementById('resp1');
let resp2 = document.getElementById('resp2');
let resp3 = document.getElementById('resp3');
let resp4 = document.getElementById('resp4');

let perguntas = [
    {
        pergunta: 'De quem é a famosa frase “Penso, logo existo”?',
        resposta1: 'Platão',
        resposta2: 'Galileu Galilei',
        resposta3: 'Descartes',
        resposta4: 'Sócrates',
        resposta: '3'
    },
    {
        pergunta: 'De onde é a invenção do chuveiro elétrico?',
        resposta1: 'França',
        resposta2: 'Brasil',
        resposta3: 'Inglaterra',
        resposta4: 'Austrália',
        resposta: '2'
    },
    {
        pergunta: 'Qual é o menor e o maior país do mundo?',
        resposta1: 'Vaticano e Rússia',
        resposta2: 'Nauru e China',
        resposta3: 'Mônaco e Canadá',
        resposta4: 'Malta e Estados Unidos',
        resposta: '1'
    },
    {
        pergunta: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        resposta1: 'O Senhor dos Anéis',
        resposta2: 'Dom Quixote',
        resposta3: 'O Pequeno Príncipe',
        resposta4: 'Um Conto de Duas Cidades',
        resposta: '2'
    },
    {
        pergunta: 'Quantas casas decimais tem o número pi?',
        resposta1: 'Duas',
        resposta2: 'Centenas',
        resposta3: 'Infinitas',
        resposta4: 'Vinte',
        resposta: '3'
    },
    {
        pergunta: 'O que a palavra legend significa em português?',
        resposta1: 'Legenda',
        resposta2: 'Conto',
        resposta3: 'História',
        resposta4: 'Lenda',
        resposta: '4'
    },
    {
        pergunta: 'Quais as duas datas que são comemoradas em novembro?',
        resposta1: 'Independência do Brasil e Dia da Bandeira',
        resposta2: 'Proclamação da República e Dia Nacional da Consciência Negra',
        resposta3: 'Dia do Médico e Dia de São Lucas',
        resposta4: ' Black Friday e Dia da Árvore',
        resposta: '2'
    },
    {
        pergunta: 'Qual a montanha mais alta do Brasil?',
        resposta1: 'Pico da Neblina',
        resposta2: 'Pico Paraná',
        resposta3: 'Monte Roraima',
        resposta4: 'Pico da Bandeira',
        resposta: '1'
    },
    {
        pergunta: 'Qual destes países é transcontinental?',
        resposta1: 'Rússia',
        resposta2: 'Filipinas',
        resposta3: 'Marrocos',
        resposta4: 'Tanzânia',
        resposta: '1'
    },
    {
        pergunta: 'Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?',
        resposta1: 'A Filosofia',
        resposta2: 'A Biologia',
        resposta3: 'A Mitologia',
        resposta4: 'A Astronomia',
        resposta: '3'
    }
]

trocarPergunta(0);

function trocarPergunta(index) {
    perguntaAtual.innerHTML = index+1;

    pergunta.innerHTML = perguntas[index].pergunta;
    pergunta.setAttribute('index', index);
    resp1.innerHTML = perguntas[index].resposta1;
    resp2.innerHTML = perguntas[index].resposta2;
    resp3.innerHTML = perguntas[index].resposta3;
    resp4.innerHTML = perguntas[index].resposta4;

}

function checarResposta(resp) {
    let index = pergunta.getAttribute('index');
    let proximaPergunta = Number(index)+1;
    if (resp == perguntas[index].resposta) {
        if (proximaPergunta > 9) {
            alert('Parabéns, você acertou todas as perguntas! Comece de novo!');
            trocarPergunta(0);
        } else {
            trocarPergunta(proximaPergunta);
        }
    } else {
        trocarPergunta(0);
    }
}
