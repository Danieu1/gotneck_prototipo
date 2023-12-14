import Animal from "./Models/Animal.js";
import Usuario from "./Models/Usuario.js";
import Mensagem from "./Models/Mensagem.js";

let animais = JSON.parse(localStorage.getItem('animais')) || [];
let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));

window.onload = () => {
    let email = document.getElementById("email");
    let nome = document.getElementById("nome");
    let senha = document.getElementById("senha");
    let idade = document.getElementById("idade");

    email.value = usuario.email;
    nome.value = usuario.nome;
    senha.value = usuario.senha;
    idade.value = usuario.idade;
};

document.getElementById("btn-editar").addEventListener("click",()=>{

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let email = document.getElementById("email").value;
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    let idade = document.getElementById("idade").value;


    if(email.trim() === "" || nome.trim() === "" || senha.trim() === "" || idade.trim() === ""){
        Mensagem.preencherCampos();
        return;
    }else{
        let encontraUsuario = false;
        let listaUsuarios = [];

        for(let i=0; i < usuarios.length;i++){
            listaUsuarios.push(usuarios[i]);
            console.log(usuarios[i]);
            if(usuarios[i].email === email && usuarios[i].email !== usuario.email){
                encontraUsuario = true;
            }
        }

        if(!encontraUsuario){
            let usuarioAtualizado = new Usuario(nome, senha, email, idade);
            for(let i=0; i < usuarios.length;i++){
                if(usuarios[i].email === email){
                    encontraUsuario = true;
                }
            }
            listaUsuarios.push(novoUsuario);
            localStorage.setItem("usuarios",JSON.stringify(listaUsuarios));
            Mensagem.atualizado();
        }else{
        Mensagem.naoAtualizado();
        }
    }
});