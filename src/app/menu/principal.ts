import TerminalUtil from "@/app/util/terminal"
import menuFundamentos from "./fundamentos"

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal")
    const [index] = await TerminalUtil.menu(["1 - Fundamentos", "2 - Sair"])

    switch (index) {
        case 0:
            await menuFundamentos()
            break
        case 1:
            process.exit(0)
    }

    await menuPrincipal()
}
