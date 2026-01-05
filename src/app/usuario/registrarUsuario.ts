import Usuario from "@/core/usuario/model/Usuario"
import TerminalUtil from "../util/terminal"
import RegistrarUsuario from "@/core/usuario/service/RegistrarUsuario"

export default async function registrarUsuario(): Promise<void> {
    TerminalUtil.titulo("Registrar Usuário")

    const id = await TerminalUtil.campoRequerido("Id: ", "1")
    const nome = await TerminalUtil.campoRequerido("Nome: ", "Usuário Teste")
    const email = await TerminalUtil.campoRequerido("E-mail: ", "email@teste")
    const senha = await TerminalUtil.campoRequerido("Senha: ", "senha123")

    const usuario: Usuario = {
        id,
        nome,
        email,
        senha,
    }

    await new RegistrarUsuario().executar(usuario)
    await TerminalUtil.sucesso("Usuário registrado com sucesso!")
    await TerminalUtil.esperaEnter()
}
