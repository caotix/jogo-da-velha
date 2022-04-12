var gamer, winner = null;
var gamerSelected = document.getElementById('gamer-selected');
var winnerSelected = document.getElementById('winner-selected');

changePlayer('X');

function choosequadrado(id) {
    if (winner !== null) {
        return;
    }

    var quadrado = document.getElementById(id);
    if (quadrado.innerHTML !== '-') {
        return;
    }

    quadrado.innerHTML = gamer;
    quadrado.style.color = '#000';

    if (gamer === 'X') {
        gamer = 'O';
    } else {
        gamer = 'X';
    }

    changePlayer(gamer);
    checksWinner();
}

function changePlayer(valor) {
    gamer = valor;
    gamerSelected.innerHTML = gamer;
}

function checksWinner() {
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);
    
    if (checkSequence(quadrado1, quadrado2, quadrado3)) {
        changesColorquadrado(quadrado1, quadrado2, quadrado3);
        changeWinner(quadrado1);
        return;
    }

    if (checkSequence(quadrado4, quadrado5, quadrado6)) {
        changesColorquadrado(quadrado4, quadrado5, quadrado6);
        changeWinner(quadrado4);
        return;
    }

    if (checkSequence(quadrado7, quadrado8, quadrado9)) {
        changesColorquadrado(quadrado7, quadrado8, quadrado9);
        changeWinner(quadrado7);
        return;
    }

    if (checkSequence(quadrado1, quadrado4, quadrado7)) {
        changesColorquadrado(quadrado1, quadrado4, quadrado7);
        changeWinner(quadrado1);
        return;
    }

    if (checkSequence(quadrado2, quadrado5, quadrado8)) {
        changesColorquadrado(quadrado2, quadrado5, quadrado8);
        changeWinner(quadrado2);
        return;
    }

    if (checkSequence(quadrado3, quadrado6, quadrado9)) {
        changesColorquadrado(quadrado3, quadrado6, quadrado9);
        changeWinner(quadrado3);
        return;
    }

    if (checkSequence(quadrado1, quadrado5, quadrado9)) {
        changesColorquadrado(quadrado1, quadrado5, quadrado9);
        changeWinner(quadrado1);
        return;
    }

    if (checkSequence(quadrado3, quadrado5, quadrado7)) {
        changesColorquadrado(quadrado3, quadrado5, quadrado7);
        changeWinner(quadrado3);
    }
}

function changeWinner(quadrado) {
    winner = quadrado.innerHTML;
    winnerSelected.innerHTML = winner;
}

function changesColorquadrado(quadrado1, quadrado2, quadrado3) {
    quadrado1.style.background = '#0f0';
    quadrado2.style.background = '#0f0';
    quadrado3.style.background = '#0f0';
}

function checkSequence(quadrado1, quadrado2, quadrado3) {
    var eigual = false;

    if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
        eigual = true;
    }

    return eigual;
}

function restart() {
    winner = null;
    winnerSelected.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    changePlayer('X');
}