let jogosAlugados = 0;

function contarEExibirAlugados() {
    console.log(`Jogos alugados no momento: ${jogosAlugados}`)
}

function alterarStatus(id) {
    let jogoEscolhido = document.getElementById(`game-${id}`);
    let imagem = jogoEscolhido.querySelector('.dashboard__item__img');
    let botao = jogoEscolhido.querySelector('.dashboard__item__button');
    let nomeJogo = jogoEscolhido.querySelector('.dashboard__item__name');

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            alert(`O jogo ${nomeJogo.textContent} foi devolvido com sucesso!`);

            jogosAlugados--
        }

    } else {
        if (confirm(`Deseja alugar o jogo ${nomeJogo.textContent}?`))
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        alert(`O jogo ${nomeJogo.textContent} foi alugado com sucesso!`);

        jogosAlugados++
    }

    contarEExibirAlugados()
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirAlugados();
});