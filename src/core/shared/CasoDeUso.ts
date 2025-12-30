export default interface CasoDeUso<I, O> {
    executar(entrada: I): Promise<O>
}
