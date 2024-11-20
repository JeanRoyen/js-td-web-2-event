/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/

(function () {
    const carousel = {
        imgsources: ['becode-seal.png', 'bell.svg',
            'clock.svg',
            'compass.svg',
            'kiss.svg',
            'kiss-wink-heart.svg',
            'lemon.svg',
            'map.svg'
        ],
        currentSlideIndex: 0,
        buttonElement: document.getElementById('next'),
        imgElement: document.querySelector('img'),
        init(){
            this.imgElement.src = "img/" + this.imgsources[this.currentSlideIndex];
            this.buttonElement.addEventListener('click', this.next.bind(this));
        },
        next(){
            this.currentSlideIndex++;
            if (this.currentSlideIndex === this.imgsources.length) {
                this.currentSlideIndex = 0;
            }
            this.imgElement.src = "img/" + this.imgsources[this.currentSlideIndex]
        }

    }
    carousel.init()
})()
