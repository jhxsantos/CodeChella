export const validarDadoFormulario = (elementoDado, elementoErro) => {
    if (elementoDado.validity.valueMissing) {
        elementoErro.textContent = `Informe o ${elementoDado.getAttribute('name')}`;
        return false;
    }
    if (elementoDado.validity.typeMismatch) {
        elementoErro.textContent = `Informe um ${elementoDado.getAttribute('name')} válido`;
        return false;
    }
    if (elementoDado.validity.tooShort) {
        elementoErro.textContent = `O ${elementoDado.getAttribute('name')} deve ter no mínimo ${elementoDado.getAttribute('minLength')} caracteres`;
        return false;
    }
    if (elementoDado.validity.tooLong) {
        elementoErro.textContent = `O ${elementoDado.getAttribute('name')} deve ter no máximo ${elementoDado.getAttribute('maxLength')} caracteres`;
        return false;
    }
    elementoErro.textContent = " ";
    return true;
};
//# sourceMappingURL=validarDadoFormulario.utils.js.map