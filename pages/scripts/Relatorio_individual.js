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

document.getElementById("editar").addEventListener("click",()=>{
  window.location.href = `./editar_animal.html?id=${idAnimal}`;
});

document.getElementById("excluir").addEventListener("click",()=>{

  for(let i=0; i < animais.length;i++){
    if(usuario.email === animais[i].email_animal && idAnimal === animais[i].id_colar){
        animais.splice(i,1);
        console.log(i)
    }
  }

  localStorage.setItem("animais",JSON.stringify(animais));
  window.location.href = "./visualizar_rebanho.html";
});