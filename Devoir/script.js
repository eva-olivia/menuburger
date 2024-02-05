let darkmode=document.querySelector("#darkmode")

let inter=0
let h1=document.querySelector("h1")
let bar=document.querySelectorAll(".bar")


document.getElementById("darkmode").addEventListener("click", function() {
    if (inter==0){
        document.body.style.background="black";
        document.body.style.color="white"; 
        for(let i =0;i<bar.length;i++){
            bar[i].style.background="white"
        }
        h1.style.color="white"
        darkmode.textContent="Light Mod"
        inter=1;
    }else{
        document.body.style.background="white";
        document.body.style.color="black";
        h1.style.color="black"
        for(let i =0;i<bar.length;i++){
            bar[i].style.background="black"
        }
        darkmode.textContent="Dark Mod"
        inter=0
    }
    console.log(inter);
});

document.addEventListener('DOMContentLoaded', function() {
    let contact = document.getElementById('contact');

    contact.addEventListener('submit', function(e) {
    e.preventDefault();

    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let message = document.getElementById('message').value;

    console.log('nom : ' + nom);
    console.log('email : ' + email);
    console.log('mdp :'+password)
    console.log('message : ' + message);
    });
});

let passwordInput = document.getElementById('password');
function validatePassword() {
    let passwordError = document.getElementById('mdpError');
    let passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&()_+{}[\]:;<>,.?~\/-]).{8,}$/;

    if (!(passwordRegex.test(passwordInput.value) && passwordInput.value.length >= 8)) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un caractère spécial, et faire au moins 8 caractères de long.';
    } else {
        passwordError.textContent = ''; 
    }
}
passwordInput.addEventListener('input', validatePassword);



function appmenu() {
    let menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block'; //trouver sur internet
}

