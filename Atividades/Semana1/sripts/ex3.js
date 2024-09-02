function calcularFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}
function solicitarNumeroEExibirFatorial() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);
    if (isNaN(numero) || numero < 0) {
        alert("Por favor, digite um número inteiro positivo.");
        return;
    }
    let fatorial = calcularFatorial(numero);
    alert("O fatorial de " + numero + " é " + fatorial + ".");

}
solicitarNumeroEExibirFatorial();