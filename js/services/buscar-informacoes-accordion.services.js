import { InformacaoAccordion } from "../models/informacao-accordion.models.js";
export const buscarInformacoesAccordion = () => {
    const informacoesAccordion = [
        new InformacaoAccordion('Quais serão as atrações?', 'Teremos dois dias de shows, o primeiro (11/03) com bandas de rock, e o segundo (12/03) com bandas pop. Confira o line-up em detalhes clicando neste <a class="resposta__link" href="../index.html">link</a>.'),
        new InformacaoAccordion('Qual é a classificação etária?', 'Entrada livre para adultos acima de 18 anos. Menores de 18 anos devem estar acompanhados de um responsável. Crianças são bem-vindas, mas crianças de colo são permitidas apenas nos setores de cadeiras.'),
        new InformacaoAccordion('Quais são os setores disponíveis?', 'Pista premium, pista comum, cadeiras inferiores e cadeiras superiores. Apenas as cadeiras superiores não tem acesso à pessoas com deficiência. Idosos e pessoas com deficiência têm acesso a todos os setores, inclusive a pista premium. Veja mais detalhes neste <a class="resposta__link" href="./setores.html">link</a>.'),
        new InformacaoAccordion('Quais são os itens proibidos?', 'Não são permitidas armas de qualquer tipo, incluindo armas brancas, bastões rígidos e assemelhados, que possam causar danos a terceiros, bem como copos e garrafas de vidro.')
    ];
    return informacoesAccordion;
};
//# sourceMappingURL=buscar-informacoes-accordion.services.js.map