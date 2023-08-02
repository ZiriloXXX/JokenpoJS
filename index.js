var play = document.getElementById('play');
var playeroptions = document.getElementById('player');
var resultado = document.getElementById('result');
var oponentex = document.getElementById('pc');

//funcao quando o botao Jogar e Clicado
play.addEventListener('click',  function () {
    resultado.innerHTML = '<p id="vsstyle">Vs</p><p id="resultstyle">'
    oponentex.innerHTML = `<p>Oponente: </p>`
    playeroptions.innerHTML = '<p>Escolha Sua Jogada:</p><button id="tesoura"><img alt="tesoura" src="images/tesoura.png" width="30" height="30"></button><button id="papel"><img src="images/papel.png" alt="papel" width="30" height="30"></button><button id="pedra"><img src="images/pedra.png" alt="pedra" width="30" height="30"></button>'

    var tesoura = document.getElementById('tesoura').addEventListener('click', function() {
        playerMove('tesoura');
    })
    var papel = document.getElementById('papel').addEventListener('click', function() {
        playerMove('papel');
    })
    var pedra = document.getElementById('pedra').addEventListener('click', function() {
        playerMove('pedra');
    })
});

function playerMove(escolha) {
    oponente = pc()

    if((escolha === 'tesoura' && oponente === 'papel') ||
    (escolha === 'papel' && oponente === 'pedra') ||
    (escolha === 'pedra' && oponente === 'tesoura')) {
        resultado.innerHTML = '<p id="vsstyle">Vs</p><p id="resultstyle" class="result-win">Você Ganhou!</p>'
    }else if ((oponente === 'tesoura' && escolha === 'papel') ||
    (oponente === 'papel' && escolha === 'pedra') ||
    (oponente === 'pedra' && escolha === 'tesoura')) {
        resultado.innerHTML = '<p id="vsstyle">Vs</p><p id="resultstyle" class="result-lose">Voce Perdeu!</p>'
    }else{
        resultado.innerHTML = '<p id="vsstyle">Vs</p><p id="resultstyle" class="result-draw">Empate!</p>'
    }

    oponentex.innerHTML = `<p>Oponente: </p><img alt="tesoura" id="escolha" src="images/${oponente}.png" width="70" height="70">`

    playeroptions.innerHTML = `<img alt="tesoura" id="escolha" src="images/${escolha}.png" width="70" height="70"></p><button id="play" onclick="play.click()">Jogar Novamente?</button>`;
}

function pc() {
    opcoes = ['tesoura', 'papel', 'pedra']

    var move = Math.floor(Math.random() * opcoes.length);

    return(opcoes[move])
}
