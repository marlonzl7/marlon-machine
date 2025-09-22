function converterBinarioParaDecimal(binario) {
    let decimal = 0;

    for (let i = binario.length - 1; i >= 0; i--) {
        const j = binario.length - i - 1;
        decimal += (binario[i] === 1) ? Math.pow(2, j) : 0;
    }

    return decimal;
} 

function converterDecimalParaBinario(decimal) {
    let k =  Math.floor(Math.log(decimal) / Math.log(2)) + 1;
    let binario = new Array(k);

    if (decimal <= 0) {
        return binario;
    }

    resto = decimal;

    for (let i = binario.length; i >= 0; i--) {
        let potencia = Math.pow(2, i);

        binario[binario.length - i - 1] = (resto - potencia >= 0) ? 1 : 0;

        if (binario[binario.length - i - 1] == 1) {
            resto -= potencia;
        }
    }

    return binario;
}

