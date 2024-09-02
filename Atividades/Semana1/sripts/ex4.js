function verificarTipoDeDado() {
    let dado = prompt("Digite qualquer dado:");
    let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
    let tipoDoDado = typeof dado;
    if (!isNaN(dado) && dado.trim() !== "") {
        tipoDoDado = 'Number';
    } else if (dado === null) {
        tipoDoDado = 'null'; 
    }
    if (desejaVerificar) {
        document.body.innerHTML = "O tipo do dado informado é: " + tipoDoDado + ".";
    } else {
        document.body.innerHTML = "Obrigado por visitar esta página.";
    }

}

verificarTipoDeDado();