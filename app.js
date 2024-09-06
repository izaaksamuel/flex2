let pes, metros, total

function calcular() {
    //entrada
    pes = Number(frmPes.inputPes.value)
    metros = 0.3048
    //processamento
    total = pes * metros
    //saída
    frmPes.inputMetros.value = total.toFixed(2)
    //return false
}