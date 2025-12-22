import TerminalUtil from "@/app/util/terminal"
import Fusca from "./Fusca"
import { terminal } from "terminal-kit"

export default function corrida() {
    const carro = new Fusca()
    for (let i = 0; i < 10; i++) {
        carro.acelerar()
        terminal.green(`Velocidade atual: ${carro.velocidadeAtual} km/h\n`)
    }
    for (let i = 0; i < 10; i++) {
        carro.frear()
        terminal.red(`Velocidade atual: ${carro.velocidadeAtual} km/h\n`)
    }
    carro.frear()
}
