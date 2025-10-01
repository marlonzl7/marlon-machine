function converter() {
    let value = document.getElementById('inputValue').value;
    let base = document.getElementById('inputBase').value;
    let result;

    if (!validar(base, value)) {
        alert("Entrada inválida");
        return;
    }

    
}

function validar(base, value) {
    let validChars = '';

    if (value == '') {
        return false;
    }

    switch (base.toLowerCase()) {
        case 'decimal':
            validChars = '0123456789';
            break;
        
        case 'binario':
            validChars = '0123456789ABCDEFabcdef';
            break;

        case 'octal':
            validChars = '01234567';
            break;

        case 'hexadecimal':
            validChars = '01';
            break;

    }

    for (let i = 0; i < value.length; i++) {
        if (validChars.indexOf(value[i] === -1)) {
            return false;
        }
    }

    return true;
}