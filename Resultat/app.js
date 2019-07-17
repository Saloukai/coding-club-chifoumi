let joueur_score = 0;
let computeur_score = 0;

const resultat = document.querySelector('.resultat > p'); // Récupérer l'objet html qui contient le message de statut
const choix = { "p": "Pierre", "f": "Feuille", "c": "Ciseaux" };

// Si un utilisateur (joueur ou odinateur) atteint 10 points
// Affiche gagné ou perdu pour le joueur
// Recharge la page pour recommencer une partie
function fingame() {
    if (joueur_score == 10) {
        alert("Gagné :) ");
        window.location.reload();
    }
    if (computeur_score == 10) {
        alert("Perdu :( ");
        window.location.reload();
    }
}

function computerChoix() {
    const choix = ["p", "f", "c"]; // Tableau contenant les 3 choix possibles (p -> pierre ; f -> feuille ; c -> ciseaux)
    const randomNumber = Math.floor(Math.random() * 3); // Générère un nombre aléatoirement entre 0 et 2 compris
    return choix[randomNumber]; // Retourne un des choix en fonction du nombre généré aléatoirement
}

function win(user, computer) {
    const userScoreSpan = document.getElementById('user-score'); // Récupérer le score du joueur

    joueur_score++; // Incrémenter de 1 le score du joueur
    userScoreSpan.innerHTML = joueur_score; // Mettre à jour le scoreboard
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : GAGNEE`; // Mettre à jour le message de statut
    document.getElementById(user).classList.add('green-ring'); // Mettre un cercle vert sur le coup joué
    setTimeout(() => { document.getElementById(user).classList.remove('green-ring') }, 500); // Enlever le cercle vert au bout de 0.5 seconde

}

function lose(user, computer) {
    const computerScoreSpan = document.getElementById('computer-score'); // Récupérer le score de l'ordinateur

    computeur_score++; // Incrémenter de 1 le score de l'ordinateur
    computerScoreSpan.innerHTML = computeur_score; // Mettre à jour le scoreboard
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : PERDU`; // Mettre à jour le message de statut
    document.getElementById(user).classList.add('red-ring'); // Mettre un cercle rouge sur le coup joué
    setTimeout(() => { document.getElementById(user).classList.remove('red-ring') }, 500); // Enlever le cercle rouge au bout de 0.5 seconde
}

function par(user, computer) {
    resultat.innerHTML = `${choix[user]} contre ${choix[computer]} : EGLITE`; // Mettre à jour le message de statut
    document.getElementById(user).classList.add('gray-ring'); // Mettre un cercle gris sur le coup joué
    setTimeout(() => { document.getElementById(user).classList.remove('gray-ring') }, 500); // Enlever le cercle gris au bout de 0.5 seconde
}

function game(user) {
    // Récupérer le choix de l'ordinateur (p, f ou c)
    const computer = computerChoix();
    const comb = user + computer;

    // Combiner les deux réponses et comparer les cas
    if (comb == "pc" || comb == "fp" || comb == "cf")
        win(user, computer);
    else if (comb == "cp" || comb == "pf" || comb == "fc")
        lose(user, computer);
    else
        par(user, computer);

    // Execute cette fonction et affiche un message si un joueur à atteint 10 points
    fingame();
}

// Evenement 'click' sur cachun des trois boutons
function main() {
    const pierre = document.getElementById('p');
    const feuille = document.getElementById('f');
    const ciseaux = document.getElementById('c');

    pierre.addEventListener('click', function () {
        game("p");
    });

    feuille.addEventListener('click', function () {
        game("f");
    });

    ciseaux.addEventListener('click', function () {
        game("c");
    });
}

main();