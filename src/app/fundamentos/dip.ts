import corrida from "@/core/fundamentos/corrida"
import TerminalUtil from "../util/terminal"

export default async function dip() {
    TerminalUtil.titulo("Princípio da Inversão de Dependência (DIP)")
    corrida()
    const res = await TerminalUtil.esperaEnter()
}
