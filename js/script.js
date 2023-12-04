const slideshow = document.querySelector(".slideshow");
const slides = slideshow.querySelectorAll(".slideshow__slide"); /* is a NodeList with all figure elements */
const controls = slideshow.querySelectorAll(".slideshow__control-button"); /* select every .slideshow__control-button inside .slideshow */

const showMeIndex = () => {

}

const goToPreviousSlide = () => {};
const goToNextSlide = () => {};


const changeSlide = (event) => {
	const button = event.currentTarget;

	showMeIndex();
	
	if (button.dataset.direction === "previous"){
		goToPreviousSlide();

	}

	if (button.dataset.direction === "next"){
		goToNextSlide();
	}

}

controls.forEach (button=> {
	button.addEventListener("click", changeSlide);
})