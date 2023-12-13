
window.onload = () => {
    let animais = JSON.parse(localStorage.getItem('animais')) || [];
    let main = document.getElementById("main");
    console.log(main)
    for(let i=0; i < animais.length;i++){
        let sectionAnimal = document.createElement("section");
        sectionAnimal.setAttribute("id", `animal${i}`);
        sectionAnimal.setAttribute("class", "animal");
        let idAnimal = document.createElement("p");
        idAnimal.innerHTML = `ID: ${animais[i].id_colar}`;    
        idAnimal.setAttribute("class", "idAnimal");
        let especieAnimal = document.createElement("p");
        especieAnimal.innerHTML = `Espécie: ${animais[i].especie}`;    
        especieAnimal.setAttribute("class", "especieAnimal");
        sectionAnimal.appendChild(idAnimal);
        sectionAnimal.appendChild(especieAnimal);
        main.appendChild(sectionAnimal);
    }
};