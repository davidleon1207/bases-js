export const esNumero = (valor) => typeof valor === "number" && !isNaN(valor);

export const esPositivo = (valor) => esNumero(valor) && valor >= 0;