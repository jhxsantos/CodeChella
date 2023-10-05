import { buscarInformacoesAccordion } from "../services/buscar-informacoes-accordion.services.js";
import { criarListennersAccordion } from "./criar-listenners-accordion.utils.js";
import { montarElementoAccordion } from "./montar-elemento-accordion.utils.js";
export const prepararAccordion = () => {
    const accordion = buscarInformacoesAccordion();
    montarElementoAccordion(accordion);
    criarListennersAccordion();
};
//# sourceMappingURL=preparar-accordion.utils.js.map