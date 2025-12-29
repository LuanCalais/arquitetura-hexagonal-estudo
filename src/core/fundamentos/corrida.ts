import Carro from "./Carro"

export default function corrida(carro: Carro, logger: (str: string) => void = console.log) {
    for (let i = 0; i < 10; i++) {
        carro.acelerar()
        logger(`Velocidade atual: ${carro.velocidadeAtual} km/h\n`)
    }
    for (let i = 0; i < 10; i++) {
        carro.frear()
        logger(`Velocidade atual: ${carro.velocidadeAtual} km/h\n`)
    }
    carro.frear()
}
