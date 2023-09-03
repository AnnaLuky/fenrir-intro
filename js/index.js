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
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.querySelector("form[name=\"leave_message\"]");
messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);
    const messages = document.querySelector("#messages");
    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span> `;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.addEventListener("click", function (event) {
        event.target.parentNode.remove();
    });
    newMessage.appendChild(removeButton);
    messages.appendChild(newMessage);
    event.target.reset();
})

const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/AnnaLuky/repos");
githubRequest.send();
githubRequest.addEventListener("load", function (event) {
    const repositories = JSON.parse(this.response)
    console.log(repositories);
    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");
    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }
});



