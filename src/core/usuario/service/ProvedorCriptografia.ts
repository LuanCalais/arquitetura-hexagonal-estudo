// Port faz parte do core da aplicação é a classe abstrata ou interface, diferente do Adpter que é a implementação concreta, essa sim fica fora do core
export default interface ProvedorCriptografia {
    criptografar(text: string): string
}
