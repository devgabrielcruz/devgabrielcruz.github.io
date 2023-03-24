function contar() {
    var chamadosAtuados = document.querySelector("#qtd");
    var content = document.querySelector('#content');
    var chamadosAtuados = chamadosAtuados.value;

    if(chamadosAtuados.length > 35 && chamadosAtuados.length < 40) {
        content.innerHTML = `Você atuou em <span class='green'>${chamadosAtuados.length} chamados</span>. Parabéns, você ultrapassou a meta diária.`;
        document.querySelector("#botao").innerHTML = "<a href=''>Assita o EP via Player Externo</a>";
    } else if(chamadosAtuados.length === 35) {
        content.innerHTML = `Você atuou em <span class='green'>${chamadosAtuados.length} chamados</span>. Você atingiu a meta diária. Parabéns!`;

    } else if(chamadosAtuados.length >= 40) {
        content.innerHTML = `UAU! Você é uma máquina! Conseguiu atuar em <span class='green'>${chamadosAtuados.length} chamados</span> hoje.`;

    } else {
        content.innerHTML = `Você atuou em <span class='red'>${chamadosAtuados.length} chamados</span>. Faltou <span>${35 - chamadosAtuados.length}</span> para alcançar a meta diária.`;

    }

    var resultado = document.querySelector('#atuados');
    resultado.innerHTML= `${chamadosAtuados.length} chamados atuados.`;
}

