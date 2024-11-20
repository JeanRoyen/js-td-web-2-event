/* EXERCICE 10 :
Au focus sur le champ, vide-le et change sa couleur de fond. Lorsqu'on clique en dehors, sa couleur de fond redevient transparente.
- VERSION 1 :
	Ne le fais que pour le champ prénom
- VERSION 2 :
	Fais-le pour le champ prénom et pour le champ nom séparément avec des fonctions différentes
- VERSION 3 :
	Fais-le de manière générique avec une seule fonction qui peut s'adapter au champ sur lequel on l'applique et associe cette fonction à tous les champs texte de la page en parcourant ceux-ci avec une boucle for.
*/

// Un seul champ
/*const focusSurname = document.getElementById('prenom');
focusSurname.addEventListener('focus', (evt) => {
    evt.target.style.background = 'green'
})
focusSurname.addEventListener('blur', (evt) => {
    evt.target.style.background = ''
})*/


// Deux champs

/*const focusSurname = document.getElementById('prenom');
const focusName = document.getElementById('nom');

focusSurname.addEventListener('focus', (evt) => {
    evt.target.style.background = 'green'
})
focusSurname.addEventListener('blur', (evt) => {
    evt.target.style.background = ''
})

focusName.addEventListener('focus', (evt) => {
    evt.target.style.background = 'green'
})
focusName.addEventListener('blur', (evt) => {
    evt.target.style.background = ''
})*/


// Plusieurs champs


(function () {
    const app = {
        inputTexts: document.querySelectorAll("input[type='text']"),
        init() {
            for (const inputTextElement of this.inputTexts) {
                inputTextElement.addEventListener('focus', (evt) => {
                    evt.target.style.background = 'green'
                })
                inputTextElement.addEventListener('blur', (evt) => {
                    evt.target.style.background = ''
                })
            }
        }
    }
    app.init()
})()