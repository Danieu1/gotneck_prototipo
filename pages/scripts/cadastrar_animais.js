import Animal from "./Models/Animal.js";
import Mensagem from "./Models/Mensagem.js";

document.getElementById("cadastrar").addEventListener("click",()=>{
    
    let animais = JSON.parse(localStorage.getItem('animais')) || []; //what? entendido
    let especie = document.getElementById("especie").value;
    let sexo = document.getElementById("sexo").value;
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
            console.log(animais[i]);
            if(animais[i].id_colar === id_colar){
                encontraId= true;
            }
        }

        if(!encontraId){
            let novoAnimal = new Animal(especie, sexo, peso, id_colar, atributos, email_animal);
            listaAnimais.push(novoAnimal);
            console.log("cadastrou")
            localStorage.setItem("animais",JSON.stringify(listaAnimais));
            Mensagem.cadastrado();
        }else{
        Mensagem.naoCadastrado();
        }
    }
});