export default class Mensagem{

    static cssSytle = `@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
                .popup-title{
                    font-size: 1.4rem;
                    font-wight: bolder;
                }

                *{
                 font: "Noto Sans', sans-serif",
                }
            `;

    static cadastrado(){
        this.popup = new Popup({
            id: "cadastrado",
            title: "Usuário Cadastrado",
            content: "Seu usuário foi cadastrado com sucesso!",
            hideCallback : () => {
                window.location.href = "./login.html";
            },
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static naoCadastrado(){
        this.popup = new Popup({
            id: "naoCadastrado",
            title: "Usuário não Cadastrado",
            content: "Não foi possível cadastrar usuário, pois já existe um usuário com esse email!",
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static animalNaoCadastrado(){
        this.popup = new Popup({
            id: "animalNaoCadastrado",
            title: "Animal não Cadastrado",
            content: "Não foi possível cadastrar o animal, pois já existe um animal com esse colar!",
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static animalAtualizado(){
        this.popup = new Popup({
            id: "animalAtualizado",
            title: "Animal Atualizado",
            content: "Animal atualizado com sucesso",
            hideCallback : () => {
                window.location.href = "visualizar_rebanho.html";
            },
            css: cssSytle,
        });
        this.popup.show();
    }

    static animalNaoAtualizado(){
        this.popup = new Popup({
            id: "animalNaoAtualizado",
            title: "Animal Não Atualizado",
            content: "Não foi possível cadastrar o animal, pois já existe um animal com esse colar!",   
            css: this.cssSytle,
        });
        this.popup.show();
    }


    static preencherCampos(){
        this.popup = new Popup({
            id: "camposVazios",
            title: "Preencha todos os campos",
            content: "Existem campos não preenchidos",
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static naoEncontrado(){
        this.popup = new Popup({
            id: "naoEncontrado",
            title: "Não foi possível realizar login",
            content: "Email ou senha incorretos, ou usuário não cadastrado!",
            hideCallback : () => {
                window.location.href = "./login.html";
            },
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static animalCadastrado(){
        this.popup = new Popup({
            id: "animalCadastrado",
            title: "Animal Cadastrado",
            content: "O bode foi cadastrado com sucesso!",
            hideCallback : () => {
                window.location.href = "./visualizar_rebanho.html";
            },
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static atualizado(){
        this.popup = new Popup({
            id: "atualizado",
            title: "Usuário Atualizado",
            content: "Seu usuário foi atualizado com sucesso!",
            hideCallback : () => {
                window.location.href = "./visualizar_rebanho.html"; 
            },
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static naoAtualizado(){
        this.popup = new Popup({
            id: "naoAtualizado",
            title: "Usuário Não Atualizado",
            content: "Não foi possível atualizar seu usuário! E-mail já cadastrado!",
            css: this.cssSytle,
        });
        this.popup.show();
    }

    static excluiUsuario(){
        this.popup = new Popup({
            id: "excluiUsuario",
            title: "Usuário excluído com sucesso",
            content: "Seu usuário foi excluído com sucesso!",  
            hideCallback : () => {
                window.location.href = "./login.html";
            },
            css: this.cssSytle,
        });
        this.popup.show();
    }

}