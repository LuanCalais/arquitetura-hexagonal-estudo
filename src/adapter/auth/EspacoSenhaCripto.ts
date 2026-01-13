import ProvedorCriptografia from "@/core/usuario/service/ProvedorCriptografia"

export default class EspacoSenhaCripto implements ProvedorCriptografia {
    criptografar(text: string): string {
        return text.split("").join(" ")
    }
}
