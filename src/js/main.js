function converter() {
    let valor = document.getElementById('inputValue').value;
    let base = document.getElementById('inputBase').value;

    if (!validar(base, valor)) {
        alert("Entrada inválida");
        return;
    }

    let resultado1, resultado2, resultado3;

    switch (base.toLowerCase) {
        case 'binario':
            resultado1 = "<bold>Decimal:</bold>" + binarioParaDecimal(valor);
            resultado2 = "<bold>Octal:</bold>" + binarioParaOctal(valor);
            resultado3 = "<bold>Hexadecimal:</bold>" + binarioParaHexadecimal(valor);;
            break;
            
        default:
            resultado1 = "Conversão ainda não implementada para " + base;
            resultado2 = "";
            resultado3 = "";

    }

    document.getElementById('saida').innerHTML = resultado1 + "<br>" + resultado2 + "<br>" + resultado3;
}

document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('.button button');
    botao.addEventListener('click', converter);
});