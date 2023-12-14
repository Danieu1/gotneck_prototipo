let animais = JSON.parse(localStorage.getItem('animais')) || [];
let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
let idAnimal = window.location.search.replace("?id=", "");

window.onload = () => {
    let especie = document.getElementById("especie");
    let sexo = document.getElementById("sexo");
    let peso = document.getElementById("peso");
    let id_colar = document.getElementById("id-colar");
    let atributos = document.getElementById("atributos");

    for(let i=0; i < animais.length;i++){
        if(usuario.email === animais[i].email_animal && idAnimal === animais[i].id_colar){
          especie.innerHTML = animais[i].especie;
          sexo.innerHTML = animais[i].sexo;
          peso.innerHTML = animais[i].peso;
          id_colar.innerHTML = animais[i].id_colar;
          atributos.innerHTML = animais[i].atributos;
        }
    }
};
