// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



window.addEventListener("load",()=>{
	document.querySelector(".main").classList.remove("hidden");
	document.querySelector(".home-section").classList.add("active");
	document.querySelector(".page-loader").classList.add("fade-out");
	setTimeout(()=>{
		document.querySelector(".page-loader").style.display = "none";
	},600);
});
// ----------------toggle navbar---------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener('click', ()=>{
	hideSection();
	toggleNavbar();
	document.body.classList.toggle("lock");

})

function	hideSection(){
	document.querySelector("section.active").classList.toggle('fade-out')
}
function toggleNavbar(){
	document.querySelector(".header").classList.toggle('active');
}
// ----------------active section--------------
document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("link-item") && e.target.hash !== ""){
		if(e.target.classList.contains("nav-item")){
			toggleNavbar();
		}else{
			hideSection();
			document.body.classList.add("lock");
		}
		setTimeout(()=>{
			document.querySelector("section.active").classList.remove("active","fade-out");
			document.querySelector(e.target.hash).classList.add("active");
			window.scrollTo(0,0);
			document.body.classList.remove("lock");

		},500)
	}
})

// ---------------------------about tabs-----------------
const tabsContainer = document.querySelector('.about-tabs'),
aboutSection = document.querySelector('.about-section');

tabsContainer.addEventListener('click', (e)=>{
if(e.target.classList.contains("tab-item") && !e.target.classList.contains('active')){
	tabsContainer.querySelector(".active").classList.remove("active");
	e.target.classList.add("active");
	const target = e.target.getAttribute("data-target");
	// const vc = document.querySelector(".tab-content.active");
	// console.log('vc', vc)
	document.querySelector(".tab-content.active").classList.remove("active");
	document.querySelector(target).classList.add("active");
}
})

// --------------------------portfolio items details popup-------

function togglePortfolioPopup(){
	document.querySelector(".portfolio-popup").classList.toggle("open");
	document.body.classList.toggle("lock");
	document.querySelector(".main").classList.toggle("fade-out");
}
document.addEventListener('click', (e)=>{
	if(e.target.classList.contains("view-project-btn")){
		togglePortfolioPopup();
		document.querySelector(".portfolio-popup").scrollTo(0,0);
		portfolioItemmDetails(e.target.parentElement);

	
	}
})
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup)
// ----------------------hide popup when cliking outside---------
		
document.addEventListener("click", (e)=>{
	if(e.target.classList.contains("pp-inner")){
		togglePortfolioPopup();
	}
})

function portfolioItemmDetails(portfolioItem){
	document.querySelector(".pp-thumbnail img").src=
	portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

	document.querySelector(".pp-header h3").innerHTML=
	portfolioItem.querySelector(".portfolio-item-title").innerHTML;

	document.querySelector(".pp-body").innerHTML=
	portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}



