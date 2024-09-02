function verificarParidade() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo.");
        return;
    }
    if (numero % 2 === 0) {
        alert("O número " + numero + " é par.");
    } else {
        alert("O número " + numero + " é ímpar.");
    }

}
