import Mensagem from './Models/Mensagem.js';

document.getElementById("btn-login").addEventListener("click",()=>{
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email.trim() === "" || senha.trim() === ""){
        Mensagem.preencherCampos();
        return;
    }else{
        let encontraUsuario = false;

        for(let i=0; i < usuarios.length;i++){
            if(usuarios[i].email === email && usuarios[i].senha === senha){
                encontraUsuario = true;
                localStorage.setItem("usuarioLogado",JSON.stringify(usuarios[i]));
                window.location.href = "../visualizar_rebanho.html";
            }
        }

        if(!encontraUsuario){
            Mensagem.naoEncontrado();
        }
    }
});