const today = new Date(); // get current date (construct new Date object)
const thisYear = today.getFullYear(); // extract year from date
const footer = document.querySelector("footer"); // select footer DOM element from html page 
const copyright = document.createElement("p"); // create paragraph DOM element
copyright.innerHTML = "&copy; Anna Lukyanenko " + thisYear; // insert text with copyright and current year into paragraph DOM element
footer.appendChild(copyright); // insert copyright paragraph into end of footer children

const skills = ["HTML", "CSS", "Java Script", "Adobe Illustrator", "Photoshop"]; // create array of skills
const skillsSection = document.querySelector("#skills"); // select element with "skills" id (section)
const skillsList = document.createElement("ul"); // create unordered list DOM element
skillsSection.appendChild(skillsList); // insert skills list into end of section children
for (let i = 0; i < skills.length; i++) { // loop through skills array
    const skill = document.createElement("li"); // create list item DOM element for skill 
    skill.innerHTML = skills[i]; // insert text with skill into list item
    skillsList.appendChild(skill); // insert skill item into end of list children
}
const messageForm = document.querySelector("form[name=\"leave_message\"]"); // select form DOM element with attribute name "leave_message"
messageForm.addEventListener("submit", function (event) { // add submit form event handler(обработчик события)
    event.preventDefault(); // switch off default submit event handler
    const usersName = event.target.usersName.value; // extract value from user name form field 
    const usersEmail = event.target.usersEmail.value;// extract value from email form field 
    const usersMessage = event.target.usersMessage.value;// extract value from message text area
    console.log(usersName, usersEmail, usersMessage); // print values to console
    const messages = document.querySelector("#messages"); // select element with "messages" id (unordered list)
    const newMessage = document.createElement("li"); // create list item DOM element for message
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> <span>${usersMessage}</span> `; // insert link and message with user data into list item 
    const removeButton = document.createElement("button"); // create DOM element button
    removeButton.innerText = "remove"; // insert text into button DOM element
    removeButton.addEventListener("click", function (event) { // add click button event handler
        event.target.parentNode.remove(); // remove parent node of button (message list item)
    });
    newMessage.appendChild(removeButton); // add button DOM element to message list item 
    messages.appendChild(newMessage);  // add message list item to messages list
    event.target.reset(); // clean up form fields
})
/* retrieve list of projects from github using github API */
fetch("https://api.github.com/users/AnnaLuky/repos") // request (GET) projects data from github
    .then((response) => { 
        return response.json(); // retrieve data in JSON format
    })
    .then((repositories) => {
        console.log(repositories); // print data to console
        const projectSection = document.querySelector("#projects"); // select element with "projects" id (section)
        const projectList = projectSection.querySelector("ul"); // create unordered list DOM element for message
        for (let i = 0; i < repositories.length; i++) { // loop through projects array
            const data = repositories[i]; // get one project into data variable 
            const project = document.createElement("li"); // create list item DOM element for project
            const linkToProject = document.createElement("a"); // create link DOM element
            linkToProject.innerText = data.name; // add project name into link
            linkToProject.setAttribute("href", data.html_url); // add project address (URL) into link
            const addInfo = document.createElement("span"); // create DOM element span for project date and description 

            // insert  date and  description into span (if description is empty (null) insert empty string)
            addInfo.innerText = `${new Date(data.created_at).toDateString()}${data.description === null ? "" : `, ${data.description}`}`;

            project.appendChild(linkToProject); // add link to project to project item
            project.appendChild(addInfo); // add date and  description to project item
            projectList.appendChild(project); // add project to project list
        }
    }).catch((error) => {
        console.error(error); // print any error if its happened
    });


