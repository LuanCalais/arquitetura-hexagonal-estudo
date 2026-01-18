import Usuario from "../../core/usuario/model/Usuario"

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: Usuario[] = []

    async inserir(usuario: Usuario) {
        const usuarioExistente = await this.buscarPorEmail(usuario.email)
        if (usuarioExistente) return
        RepositorioUsuarioEmMemoria.items.push(usuario)
    }

    async buscarPorEmail(email: string): Promise<Usuario | null> {
        return (
            RepositorioUsuarioEmMemoria.items.find((u) => u.email === email) ??
            null
        )
    }

    async buscarTodos(): Promise<Usuario[]> {
        const { items } = RepositorioUsuarioEmMemoria
        items.forEach((item) => (item.senha = "*".repeat(item.senha.length)))
        return items
    }
}
