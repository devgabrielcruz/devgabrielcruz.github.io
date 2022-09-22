function contar() {
    var chamadosAtuados = document.querySelector("#qtd");
    var chamadosAtuados = chamadosAtuados.value;

    if(chamadosAtuados.length > 20 && chamadosAtuados.length < 30) {
        alert(`Você atuou em ${chamadosAtuados.length} chamados. Parabéns, você ultrapassou a meta diária.`);
    } else if(chamadosAtuados.length === 20) {
        alert(`Você atuou em ${chamadosAtuados.length} chamados. Você atingiu a meta diária. Parabéns!`);
    } else if(chamadosAtuados.length >= 30) {
        alert(`UAU! Você é uma máquina! Conseguiu atuar em ${chamadosAtuados.length} chamados hoje.`);
    } else {
        alert(`Você atuou em ${chamadosAtuados.length} chamados. Faltou ${20 - chamadosAtuados.length} para você alcançar a meta diária.`);
    }

}