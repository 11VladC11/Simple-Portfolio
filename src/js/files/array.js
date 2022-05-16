const storage = [
	//home
	{
		"name":"Name Forename",
		"status":"student",
		"img":"img/profile.jpg",
	},
	//about
	{
		"aboutMe":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, voluptatem quae doloribus cumque aspernatur commodi temporibus eligendi nostrum debitis et magni dolorum molestiae quaerat laborum rem sint eius a, placeat fugit facilis. Consequuntur nemo ducimus tenetur at architecto ab voluptate incidunt molestiae blanditiis officia accusamus eum error ipsam, deleniti placeat.",
		"skills":["reading","drawing","painting","learning","speaking","English","Romanian"],
		"aboutImg":"img/profile.jpg",
		"education":[
			{
				"date":"2013 - 2016",
				"univType":"bachelor of technology",
				"univ":"todford university",
				"description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem quos ex quidem earum velit!"
			},
			{
				"date":"2013 - 2016",
				"univType":"bachelor of technology",
				"univ":"todford university",
				"description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem quos ex quidem earum velit!"
			},
			{
				"date":"2013 - 2016",
				"univType":"bachelor of technology",
				"univ":"todford university",
				"description":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas dolorem quos ex quidem earum velit!"
			},
		],
		"experience":[
			{
				"date":"2013 - 2016",
				"function":"web developer",
				"place":"the webshala",
				"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio ea ex esse nobis repellat.",
			},
			{
				"date":"2013 - 2016",
				"function":"web developer",
				"place":"the webshala",
				"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum optio ea ex esse nobis repellat.",
			},
		],
	},
	//portfolio
	{
		"portfolio":[
			{
				"img":"https://image.shutterstock.com/image-vector/certificate-diploma-template-sample-text-600w-259489280.jpg",
				"title":"education course website",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci natus accusamus pariatur asperiores aperiam corporis, quam nemo distinctio nihil. Quasi, necessitatibus id voluptate unde error iste quo eum minima reprehenderit, quod ab at blanditiis assumenda, vel a officiis optio? Dolorum fugiat neque praesentium, repellat et enim sit voluptate maxime delectus.",
				"created":"4 Dec 2020",
				"techUsed":"Html, Css",
				"role":"Frontend",
				"onlineLink":"www.domain.com"
			},
			{
				"img":"https://image.shutterstock.com/image-vector/certificate-diploma-template-sample-text-600w-259489280.jpg",
				"title":"education course website",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci natus accusamus pariatur asperiores aperiam corporis, quam nemo distinctio nihil. Quasi, necessitatibus id voluptate unde error iste quo eum minima reprehenderit, quod ab at blanditiis assumenda, vel a officiis optio? Dolorum fugiat neque praesentium, repellat et enim sit voluptate maxime delectus.",
				"created":"4 Dec 2020",
				"techUsed":"Html, Css",
				"role":"Frontend",
				"onlineLink":"www.domain.com"
			},
			{
				"img":"https://image.shutterstock.com/image-vector/certificate-diploma-template-sample-text-600w-259489280.jpg",
				"title":"education course website",
				"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci natus accusamus pariatur asperiores aperiam corporis, quam nemo distinctio nihil. Quasi, necessitatibus id voluptate unde error iste quo eum minima reprehenderit, quod ab at blanditiis assumenda, vel a officiis optio? Dolorum fugiat neque praesentium, repellat et enim sit voluptate maxime delectus.",
				"created":"4 Dec 2020",
				"techUsed":"Html, Css",
				"role":"Frontend",
				"onlineLink":"www.domain.com"
			},
		],
	},
		//contact
	{
		"email":"example@gmail.com",
		"phone":"91 98 **** ****",
		"facebook":"#",
		"twitter":"#",
		"instagram":"#",
		"linkedIn":"#",
		"gitHub":"#",
	},
]
// home -------------------------
document.querySelector(".home-name").innerHTML = storage[0].name;
document.querySelector(".home-status").innerHTML = storage[0].status;
document.querySelector(".home-img-box").innerHTML = `<img src=${storage[0].img}>`;
document.querySelector(".about-img-box").innerHTML = `<img src=${storage[1].aboutImg}>`;
document.querySelector(".aboutMe").innerHTML = storage[1].aboutMe;
// about -----------------
function eachSkill(e){
	document.querySelector(".skills").innerHTML += `<div class="skill-item">${e}</div>`;
}
storage[1].skills.forEach(e => eachSkill(e));



function eachEducation(e){
	document.querySelector("#education .timeline").innerHTML += `
	<div class="timeline-item">
		<span class="date">${e.date}</span>
		<h4>${e.univType} - <span>${e.univ}</span></h4>
		<p>${e.description}</p>
	</div>
	`;
}
storage[1].education.forEach(e => eachEducation(e));



function eachExperience(e){
	document.querySelector("#experience .timeline").innerHTML += `
	<div class="timeline-item">
		<span class="date">${e.date}</span>
		<h4>${e.function} - <span>${e.place}</span></h4>
		<p>${e.description}</p>
	</div>
	`;
}
storage[1].experience.forEach(e => eachExperience(e));


// portfolio-----------------------
function eachWork(e){
	document.querySelector(".portfolio-section .row").innerHTML += `
	<div class="porfolio-item">
		<div class="portfolio-item-thumbnail">
			<img src=${e.img} alt="">
		</div>
		<h3 class="portfolio-item-title">${e.title}</h3>
		<button type="button" class="butn view-project-btn">View project</button>
		<div class="portfolio-item-details">
			<div class="description">
				<p>${e.description}</p>
			</div>
			<div class="general-info">
				<ul>
					<li>Created - <span>${e.created}</span></li>
					<li>technologies used - <span>${e.techUsed}</span></li>
					<li>Role - <span>${e.role}</span></li>
					<li>View Online - <span><a href="${e.onlineLink}" target="_blank">${e.onlineLink}</a></span></li>
				</ul>
			</div>
		</div>
	</div>
	`;
}
storage[2].portfolio.forEach(e => eachWork(e));

//contact --------------
document.querySelector(".contact-email").innerHTML= storage[3].email;
document.querySelector(".contact-phone").innerHTML= storage[3].phone;
document.querySelector(".contact-facebook").setAttribute('href', `${storage[3].facebook}`);
document.querySelector(".contact-twitter").setAttribute('href', `${storage[3].twitter}`);
document.querySelector(".contact-instagram").setAttribute('href', `${storage[3].instagram}`);
document.querySelector(".contact-linkedIn").setAttribute('href', `${storage[3].linkedIn}`);
document.querySelector(".contact-gitHub").setAttribute('href', `${storage[3].gitHub}`);
