import TerminalUtil from "../util/terminal"

export default async function registrarUsuario(): Promise<void> {
    TerminalUtil.titulo("Registrar Usuário")
    await TerminalUtil.esperaEnter()
}
