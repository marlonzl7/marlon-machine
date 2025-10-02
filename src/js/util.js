function inverter(arr) {
    for (let i = 0, j = arr.length - 1; i < arr.length / 2; i++, j--) {
        let aux = arr[i];
        arr[i] = arr[j];
        arr[j] = aux;
    }
}

function validar(base, valor) {
    let caracteresValidos = obterCaracteresValidos(base);

    if (!valor) return false;

    for (let i = 0; i < valor.length; i++) {
        if (caracteresValidos.indexOf(valor[i].toUpperCase) === -1) {
            return false;
        }
    }

    return true;
}

function obterCaracteresValidos(base) {
    switch (base.toLowerCase) {
        case 'decimal': return '0123456789';
        case 'binario': return '01';
        case 'octal': return '01234567';
        case 'hexadecimal': return '0123456789ABCDEFabcdef';
        default: return '';
    }
}