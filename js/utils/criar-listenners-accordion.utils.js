export const criarListennersAccordion = () => {
    const informacoes = document.querySelector('.informacoes-gerais');
    const informacaoPergunta = informacoes.querySelectorAll('.informacao');
    informacaoPergunta.forEach((informacao) => {
        const pergunta = informacao.querySelector('.informacao__pergunta');
        const resposta = informacao.querySelector('.informacao__resposta');
        pergunta.addEventListener('click', () => {
            if (resposta.style.height === '0' || resposta.style.height === '0px' || resposta.style.height === '') {
                resposta.style.height = 'fit-content';
                resposta.style.paddingTop = '10px';
            }
            else {
                resposta.style.height = '0px';
                resposta.style.paddingTop = '0px';
            }
        });
    });
};
//# sourceMappingURL=criar-listenners-accordion.utils.js.map