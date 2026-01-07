import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import RepositorioUsuarioEmMemoria from "./RepositorioUsuarioEmMemoria"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"
import ProvedorCriptografia from "./ProvedorCriptografia"
import TerminalUtil from "@/app/util/terminal"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(private criptoProvider: ProvedorCriptografia) {}

    async executar(usuario: Usuario): Promise<void> {
        const repo = new RepositorioUsuarioEmMemoria()

        const senhaCripto = this.criptoProvider.criptografar(usuario.senha)

        const usuarioExistente = await repo.buscarPorEmail(usuario.email)
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_CADASTRADO)
        const novoUsuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto,
        }
        console.error("\n" + JSON.stringify(novoUsuario))
        repo.inserir(novoUsuario)
    }
}
