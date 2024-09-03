function verificaPalindromo() {
    let texto = prompt("Inserir uma frase:");

    const ajustarTexto = texto.toLowerCase().replace(/[\W_]/g, '');

    const pilha = [];
    for (let i = 0; i < ajustarTexto.length; i++) {
        pilha.push(ajustarTexto[i]);
    }

    let Palindromo = true;
    for (let i = 0; i < ajustarTexto.length; i++) {
        if (ajustarTexto[i] !== pilha.pop()) {
            Palindromo = false;
            break;
        }
    }

    if (Palindromo) {
        alert('É um palíndromo.');
    } else {
        alert('Não é um palíndromo.');
    }
}
verificaPalindromo();