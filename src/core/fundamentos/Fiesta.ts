import Carro from "./Carro"

export default class Fiesta implements Carro {
    constructor(
        readonly velocidadeMaxima: number = 180,
        private _velocidadeAtual: number = 0
    ) {}

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 5,
            this.velocidadeMaxima
        )
    }

    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 5, 0)
    }

    get velocidadeAtual(): number {
        return this._velocidadeAtual
    }
}
