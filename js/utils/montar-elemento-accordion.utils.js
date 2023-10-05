export const montarElementoAccordion = (accordion) => {
    const informacoesGeraisContainer = document.getElementById('informacoes-gerais');
    informacoesGeraisContainer.innerHTML = '';
    accordion.forEach((info, indice) => {
        const informacao = document.createElement('div');
        informacao.classList.add('informacao');
        const informacaoPergunta = document.createElement('div');
        informacaoPergunta.classList.add('informacao__pergunta');
        const pergunta = document.createElement('p');
        pergunta.classList.add('pergunta');
        pergunta.innerHTML = info.pergunta;
        const perguntaSeta = document.createElement('img');
        perguntaSeta.setAttribute('src', '../assets/img/arrow-drop-down.png');
        perguntaSeta.classList.add('pergunta__seta');
        informacaoPergunta.appendChild(pergunta);
        informacaoPergunta.appendChild(perguntaSeta);
        const informacaoResposta = document.createElement('div');
        informacaoResposta.classList.add('informacao__resposta');
        const resposta = document.createElement('p');
        resposta.classList.add('resposta');
        resposta.innerHTML = info.resposta;
        informacaoResposta.appendChild(resposta);
        informacao.appendChild(informacaoPergunta);
        informacao.appendChild(informacaoResposta);
        informacoesGeraisContainer.appendChild(informacao);
    });
};
//# sourceMappingURL=montar-elemento-accordion.utils.js.map