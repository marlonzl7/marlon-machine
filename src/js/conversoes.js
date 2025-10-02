function converterBinarioParaDecimal(binario) {
    let decimal = 0;

    for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
        decimal += (binario[i] === '1') ? Math.pow(2, j) : 0;
    }

    return decimal;
}

function converterBinarioParaOctal(binario) {
    let octal = [];
    let temp = [0, 0, 0];
    
    for (let i = binario.length - 1, j = 0; i >= 0; i -= 3, j++) {
        for (let k = i - 3, l = 0; k <= i; k++, l++) {
            temp[l] = (k >= 0) ? binario[k] : 0;
        }

        octal[j] = converterBinarioParaDecimal(temp);

        temp = [0, 0, 0];
    }

    inverter(octal);

    return octal;
}

function converterBinarioParaHexadecimal(binario) {
    let hexadecimal = [];
    let temp = [0, 0, 0, 0];
    let aux = 0;

    for (let i = binario.length - 1, j = 0; i >= 0; i -= 4, j++) {
        for (let k = i - 3, l = 0; k <= i; k++, l++) {
            temp[l] = (k >= 0) ? binario[k] : 0;
        }

        aux = converterBinarioParaDecimal(temp);
        
        if (aux >= 10) {
            switch (aux) {
                case 10: aux = 'A'; break;
                case 11: aux = 'B'; break;
                case 12: aux = 'C'; break;
                case 13: aux = 'D'; break;
                case 14: aux = 'E'; break;
                case 15: aux = 'F'; break;
            }
        }

        hexadecimal[j] = aux;

        temp = [0, 0, 0, 0];
    }

    inverter(hexadecimal);

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

function inverter(arr) {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
    }
}