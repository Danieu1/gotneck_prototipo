window.onload = () => {
    let animais = JSON.parse(localStorage.getItem('animais')) || [];
    let usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
    let animaisSection = document.getElementById("rebanho");

    for(let i=0; i < animais.length;i++){
        if(usuario.email === animais[i].email_animal){
            let sectionAnimal = document.createElement("section");
            sectionAnimal.setAttribute("id", animais[i].id_colar);
            sectionAnimal.setAttribute("class", "animal");
            let idAnimal = document.createElement("p");
            idAnimal.innerHTML = `ID: ${animais[i].id_colar}`;    
            idAnimal.setAttribute("class", "idAnimal");
            let especieAnimal = document.createElement("p");
            especieAnimal.innerHTML = `Espécie: ${animais[i].especie}`;    
            especieAnimal.setAttribute("class", "especieAnimal");
            sectionAnimal.appendChild(idAnimal);
            sectionAnimal.appendChild(especieAnimal);
            sectionAnimal.addEventListener("click",describeAnimal, );
            animaisSection.appendChild(sectionAnimal);
        }
    }
};

let describeAnimal = (id) => {
    let idAnimal = id.currentTarget.id;
    window.location.href = `../pages/relatorio_individual.html?id=${idAnimal}`;
};