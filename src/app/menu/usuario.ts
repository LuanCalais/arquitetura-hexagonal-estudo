import TerminalUtil from "@/app/util/terminal"
import registrarUsuario from "../usuario/registrarUsuario"

export default async function menuUsuario() {
    TerminalUtil.titulo("Menu Usuario")

    const [index] = await TerminalUtil.menu(["1. Regitrar Usuário", "Voltar"])

    switch (index) {
        case 0:
            await registrarUsuario()
            break
        default:
            return
    }

    await menuUsuario()
}
