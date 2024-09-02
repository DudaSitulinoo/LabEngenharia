function verificarPrimo() {
    let numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);
    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, digite um número inteiro positivo.");
        return;
    }
    function ePrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    if (ePrimo(numero)) {
        alert("O número " + numero + " é primo.");
    } else {
        alert("O número " + numero + " não é primo.");
    }


}

verificarPrimo();