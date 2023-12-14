import Animal from "./Models/Animal.js";
import Mensagem from "./Models/Mensagem.js";

let animais = JSON.parse(localStorage.getItem('animais')) || [];
let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
let idAnimal = window.location.search.replace("?id=", "");

window.onload = () => {
    let especie = document.getElementById("especie");

    let macho = document.getElementById("macho");
    let femea = document.getElementById("femea");
    let peso = document.getElementById("peso");
    let id_colar = document.getElementById("id-colar");
    let atributos = document.getElementById("atributos");

    for(let i=0; i < animais.length;i++){
        if(usuario.email === animais[i].email_animal && idAnimal === animais[i].id_colar){
          especie.value = animais[i].especie;
          animais[i].sexo === "Macho" ? macho.checked = true : femea.checked = true;
          peso.value = animais[i].peso;
          id_colar.value = animais[i].id_colar;
          atributos.value = animais[i].atributos;
        }
    }
};

document.getElementById("btn-salvar").addEventListener("click",()=>{
    let especie = document.getElementById("especie").value;
    let tagSexo = document.getElementsByName("sexo");
    let sexo = tagSexo[0].checked ? "Macho" : "Fêmea";
    let peso = document.getElementById("peso").value;
    let id_colar = document.getElementById("id-colar").value;
    let atributos = document.getElementById("atributos").value;
    let email_animal = JSON.parse(localStorage.getItem('usuarioLogado')).email;

    if(especie.trim() === "" || peso.trim() === "" || id_colar.trim() === ""){
        Mensagem.preencherCampos();
        return;
    }else{
        let encontraId = false;
        let listaAnimais = [];

        for(let i=0; i < animais.length;i++){
            listaAnimais.push(animais[i]);
            if(animais[i].id_colar === id_colar && animais[i].email_animal === usuario.email && animais[i].id_colar !== idAnimal){
                encontraId= true;
            }
        }

        if(!encontraId){
            for(let i=0; i < animais.length;i++){
                if(usuario.email === animais[i].email_animal && idAnimal === animais[i].id_colar){
                    let novoAnimal = new Animal(especie, sexo, peso, id_colar, atributos, email_animal);
                    listaAnimais[i] = novoAnimal;
                }
              }
            
           
            localStorage.setItem("animais",JSON.stringify(listaAnimais));
            Mensagem.animalAtualizado();
        }else{
        Mensagem.animalNaoAtualizado();
        }
    }
});