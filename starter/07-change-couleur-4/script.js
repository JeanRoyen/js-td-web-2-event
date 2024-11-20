/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/


/*function changeColor(event) {
    document.body.style.backgroundColor = event.currentTarget.value;
}

document.getElementById('rouge').addEventListener('change', (changeColor))
document.getElementById('vert').addEventListener('change', (changeColor))
document.getElementById('bleu').addEventListener('change', (changeColor))
document.getElementById('jaune').addEventListener('change', (changeColor))*/

function changeCouleur() {
    const radioBoutons = document.querySelectorAll('input[type=radio]')
    for (const radioBouton of radioBoutons) {
        if (radioBouton.checked) {
            document.body.style.background = radioBouton.value;
        }
    }
}

document.getElementById("formCouleur").addEventListener('submit', (evt) => {
    evt.preventDefault();
    changeCouleur();
});


changeCouleur();