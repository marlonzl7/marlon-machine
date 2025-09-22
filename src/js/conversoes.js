function converterBinarioParaDecimal(binario) {
    let decimal = 0;

    for (i = binario.length - 1; i >= 0; i--) {
        const j = binario.length - i - 1;
        decimal += (binario[i] === 1) ? Math.pow(2, j) : 0;
    }

    return decimal;
} 

function converterDecimalParaBinario(decimal) {

}

