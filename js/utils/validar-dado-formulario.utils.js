export const validarDadoFormulario = (elementoDado, elementoErro) => {
    if (elementoDado.validity.valueMissing) {
        elementoErro.textContent = `informe ${elementoDado.getAttribute('name')}`;
        return false;
    }
    if (elementoDado.validity.typeMismatch) {
        elementoErro.textContent = `informe ${elementoDado.getAttribute('name')} válido`;
        return false;
    }
    if (elementoDado.validity.tooShort) {
        elementoErro.textContent = `${elementoDado.getAttribute('name')} deve ter no mínimo ${elementoDado.getAttribute('minLength')} caracteres`;
        return false;
    }
    if (elementoDado.validity.tooLong) {
        elementoErro.textContent = `${elementoDado.getAttribute('name')} deve ter no máximo ${elementoDado.getAttribute('maxLength')} caracteres`;
        return false;
    }
    if (elementoDado.id === 'input__telefone' || elementoDado.id === 'input__cpf') {
        if (elementoDado.value.length.toString() < elementoDado.getAttribute('minlength') ||
            elementoDado.value.length.toString() > elementoDado.getAttribute('maxlength')) {
            elementoErro.textContent = `informe um ${elementoDado.getAttribute('name')} válido`;
            return false;
        }
    }
    elementoErro.textContent = " ";
    return true;
};
//# sourceMappingURL=validar-dado-formulario.utils.js.map