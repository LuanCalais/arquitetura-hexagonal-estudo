import TerminalUtil from "@/app/util/terminal"
import { terminal } from "terminal-kit"
import polimorfismo from "../fundamentos/polimorfismo"
import dip from "../fundamentos/dip"

export default async function menuFundamentos() {
    TerminalUtil.titulo("Menu Fundamentos")

    const [index] = await TerminalUtil.menu(["1. Polimorfismo", "2. Inversão de dependência", "Voltar"])

    switch (index) {
        case 0:
            await polimorfismo()
            break
        case 1:
            await dip()
            break
        default:
            return
    }

    await menuFundamentos()
}
