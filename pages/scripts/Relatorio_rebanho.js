let animais = JSON.parse(localStorage.getItem('animais')) || [];
let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));

window.onload = () => {
    let media = document.getElementById("media");
    let numMachos = document.getElementById("numMachos");
    let numFemeas = document.getElementById("numFemeas");
    let qtdRebanho = document.getElementById("qtdRebanho");

    let mediaPeso = 0;
    let machos = 0;
    let femeas = 0;
    let qtdAnimais = 0;

    for(let i=0; i < animais.length;i++){
        if(usuario.email === animais[i].email_animal){
            mediaPeso += parseFloat(animais[i].peso);
            animais[i].sexo === "Macho" ? machos++ : femeas++;
            qtdAnimais++;
        }
    }

    mediaPeso = mediaPeso/qtdAnimais;
    
    media.innerHTML = isNaN(mediaPeso) ? 0:  mediaPeso.toFixed(2);
    numMachos.innerHTML = machos;
    numFemeas.innerHTML = femeas;
    qtdRebanho.innerHTML = qtdAnimais;
};