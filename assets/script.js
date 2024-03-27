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
	}
]

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
let currentSlide = 0;
let img = document.querySelector('.banner-img')
let tagLine = document.querySelector('#banner p')
const dots = document.querySelectorAll('.dot')


arrowRight.addEventListener('click', function() {
	console.log("Tu as cliqué sur la flèche droite")
	currentSlide += 1
	if(currentSlide >= slides.length){
		currentSlide = 0 //je reviens à l'image 1
	}
	changeSlide()
  }
)


arrowLeft.addEventListener('click', function(){
    console.log("Tu as cliqué sur la flèche gauche")
	currentSlide -= 1
	if(currentSlide < 0){
		currentSlide = slides.length - 1 //je reviens à l'image 4
	}
	changeSlide()
  }
)

function changeSlide(){
	let newImg = slides[currentSlide].image
	let imgText = slides[currentSlide].tagLine
	img.src = "./assets/images/slideshow/" + newImg
	tagLine.innerHTML = imgText
	
	//MAJ class dot
	dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    })
}

