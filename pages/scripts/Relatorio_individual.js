
window.onload = () => {
    let idAnimal = window.location.search.replace("?id=", "");
    let animais = JSON.parse(localStorage.getItem('animais')) || [];
    let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));

    for(let i=0; i < animais.length;i++){
        if(usuario.email === animais[i].email_animal && idAnimal === animais[i].id_colar){
          console.log(animais[i]);
        }
    }
};