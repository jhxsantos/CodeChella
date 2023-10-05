import { buscarInformacoesAccordion } from "./buscar-informacoes-accordion.utils.js";
import { montarElementoAccordion } from "./montar-elemento-accordion.utils.js";
export const montarAccordion = () => {
    const accordion = buscarInformacoesAccordion();
    montarElementoAccordion(accordion);
};
//# sourceMappingURL=montar-accordion.utils.js.map