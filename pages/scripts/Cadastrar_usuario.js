import Usuario from "./Models/Usuario.js";
import Mensagem from "./Models/Mensagem.js";

document.getElementById("cadastrar").addEventListener("click",()=>{
    
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
            if(usuarios[i].email === email){
                encontraUsuario = true;
            }
        }

        if(!encontraUsuario){
            let novoUsuario = new Usuario(nome, senha, email, idade);
            listaUsuarios.push(novoUsuario);
            localStorage.setItem("usuarios",JSON.stringify(listaUsuarios));
            Mensagem.cadastrado();
        }else{
        Mensagem.naoCadastrado();
        }
    }
});