import TerminalUtil from "@/app/util/terminal"
import menuFundamentos from "./fundamentos"
import menuUsuario from "./usuario"

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal")
    const [index] = await TerminalUtil.menu(["1 - Fundamentos", "2 - Usuário", "3 - Sair"])

    switch (index) {
        case 0:
            await menuFundamentos()
            break
        case 1:
            await menuUsuario()
            break
        default:
            process.exit(0)
    }

    await menuPrincipal()
}
