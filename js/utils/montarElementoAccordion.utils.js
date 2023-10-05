export const montarElementoAccordion = (accordion) => {
    const informacoesGeraisContainer = document.getElementById('informacoes-gerais__container');
    informacoesGeraisContainer.innerHTML = '';
    accordion.forEach((info, indice) => {
        const informacao = document.createElement('div');
        informacao.classList.add('informacao' + indice);
        const informacaoPergunta = document.createElement('div');
        informacaoPergunta.classList.add('informacao__pergunta');
        const pergunta = document.createElement('p');
        pergunta.classList.add('pergunta');
        pergunta.textContent = info.pergunta;
        const perguntaSeta = document.createElement('img');
        perguntaSeta.classList.add('pergunta__seta');
        informacaoPergunta.appendChild(pergunta);
        informacaoPergunta.appendChild(perguntaSeta);
        const informacaoResposta = document.createElement('div');
        informacaoResposta.classList.add('informacao__pergunta');
        const resposta = document.createElement('p');
        resposta.classList.add('resposta');
        resposta.textContent = info.resposta;
        informacaoResposta.appendChild(resposta);
        informacao.appendChild(informacaoPergunta);
        informacao.appendChild(informacaoResposta);
        informacoesGeraisContainer.appendChild(informacao);
    });
};
//# sourceMappingURL=montarElementoAccordion.utils.js.map