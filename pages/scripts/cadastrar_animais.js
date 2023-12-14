import Animal from "./Models/Animal.js";
import Mensagem from "./Models/Mensagem.js";

document.getElementById("cadastrar").addEventListener("click",()=>{
    
    let animais = JSON.parse(localStorage.getItem('animais')) || []; //what? entendido
    let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
    let especie = document.getElementById("especie").value;
    let tagSexo = document.getElementsByName("sexo");
    let sexo = tagSexo.checked ? "Fêmea" : "Macho";
    console.log(sexo);
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
            if(animais[i].id_colar === id_colar && animais[i].email_animal === usuario.email){
                encontraId= true;
            }
        }

        if(!encontraId){
            let novoAnimal = new Animal(especie, sexo, peso, id_colar, atributos, email_animal);
            listaAnimais.push(novoAnimal);
            localStorage.setItem("animais",JSON.stringify(listaAnimais));
            Mensagem.animalCadastrado();
        }else{
        Mensagem.animalNaoCadastrado();
        }
    }
});