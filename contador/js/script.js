function contar() {
    var chamadosAtuados = document.querySelector("#qtd");
    var content = document.querySelector('#content');
    var chamadosAtuados = chamadosAtuados.value;

    if(chamadosAtuados.length > 20 && chamadosAtuados.length < 30) {
        content.innerHTML = `Você atuou em <span>${chamadosAtuados.length} chamados</span>. Parabéns, você ultrapassou a meta diária.`;

    } else if(chamadosAtuados.length === 20) {
        content.innerHTML = `Você atuou em <span>${chamadosAtuados.length} chamados</span>. Você atingiu a meta diária. Parabéns!`;

    } else if(chamadosAtuados.length >= 30) {
        content.innerHTML = `UAU! Você é uma máquina! Conseguiu atuar em <span>${chamadosAtuados.length} chamados</span> hoje.`;

    } else {
        content.innerHTML = `Você atuou em <span>${chamadosAtuados.length} chamados</span>. Faltou <span>${20 - chamadosAtuados.length}</span> para alcançar a meta diária.`;

    }

    var resultado = document.querySelector('#atuados');
    resultado.innerHTML= `${chamadosAtuados.length} chamados atuados.`;
}

