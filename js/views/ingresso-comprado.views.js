const url = new URL(window.location.href);
let nome = "";
let tipoIngresso = "";
if (url.searchParams.get("nome"))
    nome = url.searchParams.get("nome");
if (url.searchParams.get("tipoIngresso"))
    tipoIngresso = url.searchParams.get("tipoIngresso");
const hoje = new Date();
const dataFormatada = (hoje.getDate().toString().length === 1 ? "0" + hoje.getDate().toString() : hoje.getDate().toString()) + "/" +
    ((hoje.getMonth() + 1).toString().length === 1 ? "0" + (hoje.getMonth() + 1).toString() : (hoje.getMonth() + 1).toString()) + "/" +
    hoje.getFullYear().toString();
const elementoNome1 = document.getElementById("nome-comprador-1");
const elementoTipoIngresso1 = document.getElementById("tipo-ingresso-1");
const elementoDataCompra1 = document.getElementById("data-compra-1");
const elementoNome2 = document.getElementById("nome-comprador-2");
const elementoTipoIngresso2 = document.getElementById("tipo-ingresso-2");
const elementoDataCompra2 = document.getElementById("data-compra-2");
elementoNome1.innerText = nome;
elementoTipoIngresso1.innerText = tipoIngresso;
elementoDataCompra1.innerText = "Data da compra: " + dataFormatada;
elementoNome2.innerText = nome;
elementoTipoIngresso2.innerText = tipoIngresso;
elementoDataCompra2.innerText = "Data da compra: " + dataFormatada;
//# sourceMappingURL=ingresso-comprado.views.js.map