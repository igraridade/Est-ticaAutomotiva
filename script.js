const title = document.getElementById("titulo");

title.textContent = "Nós cuidamos";

title.style.color = "red";

title.style.fontSize = ("30px");

//console.log(title);


const button = document.getElementById("login");

button.addEventListener("click", clicar);
let nome = "Igor";

function clicar(){
    title.textContent = `Seja bem-vindo, ${nome}!`;
    title.style.color = "red";
    title.style.fontSize = ("30px");
}

//console.log(button);
//const links = document.getElementsByClassName("link");
//console.log(links);