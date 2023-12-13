export default class Animal{
    constructor(especie, sexo, peso, id_colar, atributos, email_animal){
            this.especie = especie;
            this.sexo = sexo;
            this.peso = peso;
            this.id_colar = id_colar;
            this.atributos = atributos;
            this.email_animal = email_animal;
    }

    setEspecie(especie){
        this.especie = especie;
    }

    setSexo(sexo){
        this.sexo = sexo;
    }

    setPeso(peso){
        this.peso = peso;
    }

    setIdColar(id_colar){
        this.id_colar = id_colar;
    }

    setAtributos(atributos){
        this.atributos = atributos;
    }

    setEmail_animal(email_animal){
        this.email_animal = email_animal;
    }

    getAnimal(){
        return this;
    }
}