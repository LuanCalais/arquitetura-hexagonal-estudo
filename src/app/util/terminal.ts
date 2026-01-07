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

    static async campoRequerido(
        label: string,
        defaultValue: string = ""
    ): Promise<string> {
        terminal.blue(`\n${label}: `)
        const valor = await terminal.inputField({ default: defaultValue })
            .promise
        if (valor) {
            return valor.trim()
        }

        return TerminalUtil.campoRequerido(label)
    }

    static async sucesso(text: string, skipRow: boolean = true): Promise<void> {
        terminal.green((skipRow ? "\n" : "") + text)
        terminal.green()
    }

    static async error(
        errorMessage: any,
        skipRow: boolean = true
    ): Promise<void> {
        terminal.red((skipRow ? "\n" : "") + errorMessage)
    }

    static async menu(options: string[]): Promise<[number, string]> {
        const res = await terminal.singleColumnMenu(options).promise
        return [res.selectedIndex, res.selectedText]
    }

    static async esperaEnter(): Promise<void> {
        terminal.white("\nPressione ENTER para continuar...")
        await terminal.inputField({ echo: false }).promise
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
