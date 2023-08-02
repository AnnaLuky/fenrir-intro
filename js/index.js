const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = "&copy; Anna Lukyanenko " + thisYear;
footer.appendChild(copyright);

const skills = ["HTML", "CSS", "Java Script", "Adobe Illustrator", "Photoshop"];
const skillsSection = document.querySelector("#skills");
const skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);
for (let i=0; i<skills.length; i++){
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}


