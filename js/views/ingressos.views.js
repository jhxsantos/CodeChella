import { mascaraCPF, mascaraTelefone } from "../utils/mascaras-inputs.utils.js";
import { validarDadoFormulario } from "../utils/validar-dado-formulario.utils.js";
const elementoCPF = document.getElementById("input__cpf");
elementoCPF.addEventListener("keyup", () => {
    elementoCPF.value = mascaraCPF(elementoCPF.value);
});
const elementoTelefone = document.getElementById("input__telefone");
elementoTelefone.addEventListener("keyup", () => {
    elementoTelefone.value = mascaraTelefone(elementoTelefone.value);
});
const btnAvancar = document.getElementById("ingressos__botao-avancar");
btnAvancar.addEventListener("click", evento => {
    const formulario = document.getElementById("ingressos__formulario");
    const listaInputs = formulario.querySelectorAll('.input__container');
    let validou = true;
    for (let i = listaInputs.length - 1; i >= 0; i--) {
        const inputContainer = listaInputs[i];
        const elementoInput = inputContainer.querySelector('.input');
        const elementoErro = inputContainer.querySelector('.erro__input');
        const validouTemp = validarDadoFormulario(elementoInput, elementoErro);
        if (validou)
            validou = validouTemp;
        if (!validouTemp)
            elementoInput.focus();
    }
    evento.preventDefault();
    if (validou) {
        const elementoNome = formulario.querySelector(".input__nome");
        const elementoTipoIngresso = formulario.querySelector(".input__tipo-ingresso");
        window.location.href = `../html/ingresso-comprado.html?nome=${elementoNome.value}&tipoIngresso=${elementoTipoIngresso.value}`;
    }
});
const url = new URL(window.location.href);
if (url.searchParams.get("ancora")) {
    const ancora = url.searchParams.get("ancora");
    window.location.href = ancora;
}
window.addEventListener('load', () => {
    document.getElementById('input__nome').focus();
});
//# sourceMappingURL=ingressos.views.js.map