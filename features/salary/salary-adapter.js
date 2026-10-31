import { esNumero, esPositivo } from "../../shared/utils/validator.js";

export const adaptarEntrada = (horasTexto, valorTexto, diasTexto, faltasTexto) => {
  const horas = Number(horasTexto);
  const valor = Number(valorTexto);
  const dias = Number(diasTexto);
  const faltas = Number(faltasTexto);

  if (!esNumero(horas) || !esPositivo(horas)) throw new Error("Horas trabajadas inválidas (debe ser un número positivo).");
  if (!esNumero(valor) || !esPositivo(valor)) throw new Error("Valor de la hora inválido (debe ser un número positivo).");
  if (!esNumero(dias) || !esPositivo(dias)) throw new Error("Días del mes inválidos (debe ser un número positivo).");
  if (!esNumero(faltas) || !esPositivo(faltas)) throw new Error("Días de inasistencia inválidos (debe ser un número positivo).");

  return { horas, valor, dias, faltas };
};