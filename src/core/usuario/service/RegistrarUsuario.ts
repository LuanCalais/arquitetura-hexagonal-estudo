import CasoDeUso from "@/core/shared/CasoDeUso"
import Usuario from "../model/Usuario"
import Erros from "@/core/shared/Erros"
import Id from "@/core/shared/Id"
import ProvedorCriptografia from "./ProvedorCriptografia"
import RepositorioUsuario from "./RepositorioUsuario"

export default class RegistrarUsuario implements CasoDeUso<Usuario, void> {
    constructor(
        private repositorio: RepositorioUsuario,
        private criptoProvider: ProvedorCriptografia,
    ) {}

    async executar(usuario: Usuario): Promise<void> {
        const senhaCripto = this.criptoProvider.criptografar(usuario.senha)

        const usuarioExistente = await this.repositorio.buscarPorEmail(
            usuario.email,
        )
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_CADASTRADO)
        const novoUsuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: senhaCripto,
        }
        console.error("\n" + JSON.stringify(novoUsuario))
        this.repositorio.inserir(novoUsuario)
    }
}
