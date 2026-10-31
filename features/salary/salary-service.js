import { multiplicar, restar } from "../../shared/utils/calculator.js";

export const generarLiquidacion = (entidad) => {
  // 1. Calcular pago diario
  const pagoDiario = multiplicar(entidad.horas, entidad.valor);
  
  // 2. Calcular Gran Total
  const granTotal = multiplicar(pagoDiario, entidad.dias);
  
  // 3. Calcular total de Descuentos
  const descuentos = multiplicar(pagoDiario, entidad.faltas);
  
  // 4. Calcular Total a Pagar
  const totalAPagar = restar(granTotal, descuentos);

  return {
    granTotal,
    descuentos,
    totalAPagar
  };
};