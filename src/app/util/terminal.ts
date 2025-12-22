import { terminal } from "terminal-kit"

export default class TerminalUtil {
    static titulo(text: string): void {
        terminal.clear()
        terminal.magenta(`${text}\n`)
        terminal.magenta("=".repeat(text.length) + "\n")
    }

    static limpar(): void {
        terminal.clear()
    }

    static async menu(options: string[]): Promise<[number, string]> {
        const res = await terminal.singleColumnMenu(options).promise
        return [res.selectedIndex, res.selectedText]
    }

    static exibirChaveValor(chave: string, valor: any): void {
        terminal.yellow(chave).green(valor).white("\n")
    }

    static async selecao(
        text: string,
        options: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`\n${text} (y/n): `)
        const res = await terminal.singleLineMenu(options).promise
        return [res.selectedIndex, res.selectedText]
    }

    static async confirmacao(text: string): Promise<boolean> {
        terminal.yellow(`\n${text} (y/n): `)
        const res = await terminal.singleLineMenu(["y", "n"]).promise
        return res.selectedIndex === 0
    }
}
