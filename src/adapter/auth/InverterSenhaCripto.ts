import ProvedorCriptografia from "../../core/usuario/service/ProvedorCriptografia";

// Adapter não faz parte do core da aplicação, ele é a implementação concreta da Port, que essa sim fica no core
export default class InverterSenhaCripto implements ProvedorCriptografia{
    criptografar(senha: string): string {
        return senha.split("").reverse().join("")
    }
}
