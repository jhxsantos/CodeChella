export const mascaraTelefone = (value) => {
    if (!value)
        return '';
    const valor = value
        .replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(value[5] !== '9' ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
    return valor;
};
export const aplicarMascaraTelefone = (telefone) => {
};
export const limparMascaraTelefone = (telefone) => {
    return telefone.replace(/[\D]/g, '');
};
export const mascaraCPF = (value) => {
    if (!value)
        return '';
    const valor = value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return valor;
};
export const aplicarMascaraCPF = (cpf) => {
    cpf.value = mascaraCPF(cpf.value);
};
export const limparMascaraCPF = (cpf) => {
    return cpf.replace(/[\D]/g, '');
};
//# sourceMappingURL=mascaras-inputs.utils.js.map