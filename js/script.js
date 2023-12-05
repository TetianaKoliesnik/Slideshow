const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slideshow__slide"); /* is a NodeList with all figure elements */
const controls = slideshow.querySelectorAll(".slideshow__control-button"); /* select every .slideshow__control-button inside .slideshow */



let index = 0; /* has to be on the same scope as the involved function, so the function is able to get the index */
const totalSlides = slides.length;
const lastIndex = slides.length - 1;


const goToPreviousSlide = () => {

	if (index === 0) {
		index = lastIndex; 
	} else {
		index = index - 1;
	}

	slides.forEach(slide => {
		slide.classList.remove("slideshow__slide--visible"); /* remove class from the element in a classList */
	})

	slides[index].classList.add("slideshow__slide--visible"); /* add class to the element with the given index */
};

const goToNextSlide = () => {

	if (index < lastIndex) {
		index = index + 1; /* assigns the property to the index var (changes the index) */
	} else {
		index = 0; /* go to the beginning of the slideshow */
	}

	slides.forEach(slide => {
		slide.classList.remove("slideshow__slide--visible"); /* remove class from the element in a classList */
	})

	slides[index].classList.add("slideshow__slide--visible"); /* add class to the element with the given index */
};


const changeSlide = (event) => {
	const button = event.currentTarget;


	if (button.dataset.direction === "previous") {
		goToPreviousSlide();

	}

	if (button.dataset.direction === "next") {
		goToNextSlide();
	}

}

controls.forEach(button => {
	button.addEventListener("click", changeSlide);
})