function realizarOperacao(n1, n2, base, operacao) {
    let baseNumerica = base.toLowerCase;
    let operacaoMat = operacao.toLowerCase;
    let basesValidas = ['binario', 'decimal', 'octal', 'hexadecimal'];
    let resultado;

    switch (operacaoMat) {
        case 'somar':
            n1 = binarioParaDecimal(n1);
            n2 = binarioParaDecimal(n2);

            let resultado = calcularResultado(operacao);

            break;
    }
    switch (baseNumerica()) {
        case 'binario':
            n1 = binarioParaDecimal(n1);
            n2 = binarioParaDecimal(n2);

            resultado = calcularResultado(operacao);

            break;

        case 'decimal':
            resultado = calcularResultado(operacao);
            
            break;

        case 'octal':
            n1 = binarioParaDecimal(n1);
            n2 = binarioParaDecimal(n2);

            resultado = calcularResultado(operacao);
            
            break;

        case 'hexadecimal':
            n1 = binarioParaDecimal(n1);
            n2 = binarioParaDecimal(n2);

            resultado = calcularResultado(operacao);
            
            break;


    }

    return resultado;
}

function calcularResultado(operacao, n1, n2) {
    if (operacao == 'somar') return somar(n1, n2);
    if (operacao == 'subtrair') return subtrair(n1, n2);
    if (operacao == 'multiplicar') return multiplicar(n1, n2);
    if (operacao == 'dividir') return dividir(n1, n2);
}

function somar(decimal1, decimal2) {
    return decimal1 + decimal2;
}

function subtrair(decimal1, decimal2) {
    return decimal1 - decimal2;
}

function multiplicar(decimal1, decimal2) {
    return decimal1 * decimal2;
}

function dividir(decimal1, decimal2) {
    return decimal1 / decimal2;
}