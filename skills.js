const htmlCard = document.getElementById("html-card");
htmlCard.addEventListener("click", () => {
    window.location.href = "./html/html-form.html";
});

const cssCard = document.getElementById("css-card");    
cssCard.addEventListener("click", () => {
    window.location.href = "./Css/css-form.html";
});

const jsCard = document.getElementById("js-card");  
jsCard.addEventListener("click", () => {
    window.location.href = "./Js/js-form.html";
});

const reactCard = document.getElementById("react-card");
reactCard.addEventListener("click", () => {
    window.location.href = "./React/react.html";
});

const pythonCard = document.getElementById("python-card");
pythonCard.addEventListener("click", () => {
    window.location.href = "./Python/python.html";
}); 

const homebtn = document.getElementById("but1");
homebtn.addEventListener("click", () => {
    window.location.href = "../Home/index.html";
});

const aboutbtn = document.getElementById("but2");
aboutbtn.addEventListener("click", () => {
    window.location.href = "../About/about.html";
});

const contactBtn = document.getElementById("but5");

contactBtn.addEventListener("click", () => {
    window.location.href = "../Contact/contact.html";
});

const projectsBtn = document.getElementById("but4");

projectsBtn.addEventListener("click", () => {
    window.location.href = "../Projects/projects.html";
});