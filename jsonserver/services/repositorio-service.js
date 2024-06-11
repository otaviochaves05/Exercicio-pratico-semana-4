export class RepositorioService {

    constructor() {

        this.urlBase = "https://api.github.com";

    }

    async obterReposotorios(idUsuario) {

        const resposta = await fetch(`${this.urlBase}/users/${idUsuario}/repos`);

        if (!resposta) {
            throw new Error("Nao foi possivel buscar os repositorios deste usuraio");
        } else {
            return resposta.json();
        }

    }

}