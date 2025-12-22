import TerminalUtil from "../util/terminal"

export default async function polimorfismo(): Promise<void> {
    TerminalUtil.titulo("Polimorfismo")
    while (true) {
        TerminalUtil.limpar()
        const continuar = await TerminalUtil.confirmacao("Deseja continuar?")
        if (!continuar) return
    }
}
