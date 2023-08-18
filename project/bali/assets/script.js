const faqSlideSwitch = document.querySelectorAll(".faq-slide-switch");
const faqSlide = document.querySelectorAll(".faq-slide");

for (let i = 0; i < faqSlideSwitch.length; i++) {
	faqSlideSwitch[i].addEventListener("click", function () {
		faqSlide[i].classList.toggle("faq-slide-active");
	});
}
