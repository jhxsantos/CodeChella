import { InformacaoAccordion } from "../models/informacao-accordion.models";
const accordion = [
    new InformacaoAccordion('Quais serão as atrações?', 'Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste <a class="resposta__link" href="../index.html">link</a>.'),
    new InformacaoAccordion('Qual é a classificação etária?', 'Entrada livre para adultos acima de 18 anos. Menores de 18 anos devem estar acompanhados de um responsável. A idade mínima 13 anos.'),
    new InformacaoAccordion('Quais são os setores disponíveis?', 'Pista premium, pista comum, cadeiras inferiores e cadeiras superiores. Apenas as cadeiras superiores não tem acesso à pessoas com deficiência. Veja mais detalhes neste <a class="resposta__link" href="./setores.html">link</a>.'),
    new InformacaoAccordion('Quais são os itens proibidos?', 'Não são permitidas armas de qualquer tipo, incluindo armas brancas, bastões rígidos e assemelhados, que possam causar danos a terceiros, bem como copos e garrafas de vidro.')
];
accordion.forEach((info, indice) => {
    const informacoesGeraisContainer = document.getElementById('informacoes-gerais__container');
    informacoesGeraisContainer.innerHTML = '';
    const informacao = document.createElement('div');
    informacao.classList.add('informacao' + indice);
    const informacaoPergunta = document.createElement('div');
    informacaoPergunta.classList.add('informacao__pergunta');
    const pergunta = document.createElement('p');
    pergunta.classList.add('pergunta');
    pergunta.textContent = info.pergunta;
    const perguntaSeta = document.createElement('img');
    perguntaSeta.classList.add('pergunta__seta');
    const informacaoResposta = document.createElement('div');
});
//# sourceMappingURL=gerenciar-accordion.utils.js.map