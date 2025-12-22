import Carro from "@/core/fundamentos/Carro"
import TerminalUtil from "../util/terminal"
import Fusca from "@/core/fundamentos/Fusca"
import Ferrari from "@/core/fundamentos/Ferrari"

export default async function polimorfismo(): Promise<void> {
    TerminalUtil.titulo("Polimorfismo")

    const [tipoCarro] = await TerminalUtil.selecao(
        "Qual tipo de carro deseja?",
        ["Fusca", "Ferrari"]
    )

    const carro: Carro = tipoCarro === 0 ? new Fusca() : new Ferrari()

    while (true) {
        TerminalUtil.limpar()
        TerminalUtil.exibirChaveValor(
            "Velocidade máxima: ",
            carro.velocidadeMaxima + " km/h"
        )

        TerminalUtil.exibirChaveValor(
            "Velocidade atual: ",
            carro.velocidadeAtual + " km/h"
        )

        const [opcao] = await TerminalUtil.selecao("O que deseja fazer?", [
            "Acelerar",
            "Frear",
        ])

        const continuar = await TerminalUtil.confirmacao("Tem certeza?")
        if (!continuar) return

        switch (opcao) {
            case 0:
                carro.acelerar()
                break
            case 1:
                carro.frear()
                break
        }
    }
}
