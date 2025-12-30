import corrida from "@/core/fundamentos/corrida"
import TerminalUtil from "../util/terminal"
import Fusca from "@/core/fundamentos/Fusca"
import Ferrari from "@/core/fundamentos/Ferrari"
import Carro from "@/core/fundamentos/Carro"
import Fiesta from "@/core/fundamentos/Fiesta"
import { terminal } from "terminal-kit"

export default async function dip() {
    TerminalUtil.titulo("Princípio da Inversão de Dependência (DIP)")
    const [tipo] = await TerminalUtil.selecao("Escolha o tipo de carro:", [
        "Fusca",
        "Ferrari",
        "Fiesta",
    ])

    let carro: Carro

    switch (tipo) {
        case 0:
            carro = new Fusca()
            break
        case 1:
            carro = new Ferrari()
            break
        case 2:
            carro = new Fiesta()
            break
        default:
            carro = new Fusca()
            break
    }
    corrida(carro, terminal.gray)
    await TerminalUtil.esperaEnter()
}
