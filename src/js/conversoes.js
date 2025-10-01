function converterBinarioParaDecimal(binario) {
    let decimal = 0;

    for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
        decimal += (binario[i] === '1') ? Math.pow(2, j) : 0;
    }

    return decimal;
}

function converterBinarioParaOctal(binario) {
    let octal = [];
    let temp = [];

    for (let i = binario.length - 1; i >= 0; i -= 3) {
        let k = 0;

        for (let j = i; j >= i - 3; j--) {
            temp[j] = binario[j];
        }

        octal[k] = converterBinarioParaDecimal(temp);

        k++;
    }

    return octal;
}

function converterBinarioParaHexadecimal(binario) {
    let hexadecimal = [];
    let temp = [];
    let aux = 0;

    for (let i = binario.length - 1; i >= 0; i -= 4) {
        let k = 0;

        for (let j = i; j >= i - 4; j--) {
            
        }

    }

    return hexadecimal;
}

function converterDecimalParaBinario(decimal) {
    let k =  Math.floor(Math.log(decimal) / Math.log(2)) + 1;
    let binario = new Array(k);

    if (decimal <= 0) {
        return binario;
    }

    let resto = decimal;

    for (let i = binario.length; i >= 0; i--) {
        let potencia = Math.pow(2, i);

        binario[binario.length - i - 1] = (resto - potencia >= 0) ? 1 : 0;

        if (binario[binario.length - i - 1] == 1) {
            resto -= potencia;
        }
    }

    return binario;
}
