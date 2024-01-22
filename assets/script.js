 //le tableau

 const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
]
//ETAPE 1:METTRE A JOUR LE CODE HTML
let bannerImg = document.querySelector('.banner-img');
let  arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');
let dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0

//ETAPE 2:AJOUTER UN ADDEVENTLISTENER SUR LES FLECHES
//event listener sur la flèche de gauche. 
// Gestionnaire d'événement pour le clic sur la flèche gauche
    arrowLeft.addEventListener('click',()=> {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left')
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});
//event listener sur la flèche de droite. 
// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click',()=> {
    currentIndex = (currentIndex + 1) 
    updateCarousel(currentIndex, 'right')
    updateDots(currentIndex)// Mettez à jour les points indicateurs
});

//ETAPE 3:AJOUTER DES BULLET POINTS AU SLIDER
//la condition pour mettre à jour les points indicateurs
	
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected') // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected') // Supprimez la classe pour les autres points
        }
    })
}
//ETAPE 4:MODIFIEZ LE SLIDE AU CLIC SUR LE BOUTON
//pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0
    }
 //ETAPE 5:METTEZ EN PLACE LE DEFILEMENT INFINI SUR LE CAROUSSEL

    // Mettre à jour l'image  //le chemin pour changer l’image
    let imagePath = `assets/images/slideshow/${slides[currentIndex].image}`
    bannerImg.src = imagePath
    bannerImg.alt = `Slide ${currentIndex + 1}`

  // insérez la tagLine de la slide.
    let tagLine = slides[currentIndex].tagLine
	  // Mettre à jour le texte 	//intégrer le texte avec innerHTML 
    document.querySelector('p').innerHTML = tagLine

    console.log(`Clic sur la flèche ${direction}`)
}


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage')
updateDots(currentIndex) // Mettez à jour les points indicateurs pour la première diapositive





   
    
	

 

 







         








