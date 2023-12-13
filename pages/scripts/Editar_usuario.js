window.onload(()=>{
    let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));

    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
});