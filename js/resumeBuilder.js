
var bio = {
	"name": "Ghaida Alshuniber",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "+966-558778966",
		"email": "Ghaidalshuniber@gmail.com",
		"github": "ghaidalshuniber",
		"twitter": "@Ghaidalshunebr",
		"location": "Riyadh,Alsafarat,Saudi Arabia"
	},

	"welcomeMessage":"Hello, You'll find in this simple page all of what concerns me scientifically!",
	"skills":["Programing","Data Anlaysis", "MYSQL","JavaScript", "THML" ,"C#", "CSS","Java"],
	"bioPic": "images/ghaid.jpg"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedWmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedWmsg);
$("#header").append(formattedPic);


var formattedContacs = [];
formattedContacs.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContacs.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContacs.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContacs.push(HTMLlocation.replace("%data%", bio.contacts.location));



for(i in formattedContacs) {
	$("#topContacts").append(formattedContacs[i]);
	$("#footerContacts").append(formattedContacs[i]);
}

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}
var work = {
	"jobs": [
	{
		"employer": "The Udacity Group",
		"title": "Front-End Developer",
		"location": "SEMA,Riyadh, Saudi Arabia",
		"dates": "October 2017",
		"description": "I work as a Software Developer in a variety of languages such as JAVA and C#. Including development of back end systems, As well front end graphical user interfaces."

	}
	]
};

function displaywork() {
	for(j in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[j].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[j].title);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[j].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[j].dates);
		var formattedDescr = HTMLworkDescription.replace("%data%", work.jobs[j].description);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescr);
	}
}
displaywork();


$(document).click(function(loc) {

	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});


var projects = {
	"projects": [
	{
		"title": "Build a Portfolio Site",
		"dates": "JUL 29 - AUG 4",
		"description": "Build my portfolio site using HTML5, CSS.",
		"images": ["images/project.gif"]

	}	
	]
};


//Encapsulation
projects.display = function() {
	for(p in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[p].dates); 
		var formattedDescr = HTMLprojectDescription.replace("%data%", projects.projects[p].description);


		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescr);

		if ( projects.projects[p].images.length > 0) {
			for(image in projects.projects[p].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	} 
}
projects.display();



var education = {
	"schools": [   
	{ "name": "PNU University",
	"degree": "B.S.",
	"location": "Riyadh, PNU University",
"majors": ["Computer Science"], //array
"dates": "2013 - 2017"
}     
],
"onlineCourses": [ // Array


{"title": "Front-End course",
"school": "Udacity",
"dates": "JULY 7 - OCT 14",
"url": "https://www.udacity.com/course/nd001"

}

]  
};

education.display = function(){ 

	$("#education").append(HTMLschoolStart);

	for( i in education.schools) {

		var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location); 
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates); 
		var formattedNameDegree = formattedName + formattedDegree;



		$(".education-entry:last").append(formattedNameDegree);
		$(".education-entry:last").append(formattedLoc);
		$(".education-entry:last").append(formattedDates);



		if ( education.schools[i].majors.length > 0) {
			for( m in education.schools[i].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[m]);
				$(".education-entry:last").append(formattedMajor);

			}
		}
	}


	if(education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses); 
		for( o in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[o].title);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[o].school); 
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[o].dates);
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[o].url); 
			var formattedTitleSchool =  formattedTitle + formattedSchool;

			$(".education-entry:last").append(formattedTitleSchool);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedUrl);

		}
	}
}

education.display();


$("#mapDiv").append(googleMap);



