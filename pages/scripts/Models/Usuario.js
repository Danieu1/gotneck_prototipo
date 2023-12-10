export default class Usuario{
    constructor(usuario, senha, email, idade){
            this.nome = usuario;
            this.senha = senha;
            this.email = email;
            this.idade = idade;
    }

    setNome(nome){
        this.nome = nome;
    }

    setSenha(senha){
        this.senha = senha;
    }

    setEmail(email){
        this.email = email;
    }

    setIdade(idade){
        this.idade = idade;
    }

    getUsuario(){
        return this;
    }
}