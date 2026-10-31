import { preguntar } from "./core/input-handler.js";
import { adaptarEntrada } from "./features/salary/salary-adapter.js";
import { generarLiquidacion } from "./features/salary/salary-service.js";
import { mostrarResultados, mostrarError } from "./shared/render-engine.js";

const iniciarAplicacion = () => {
  try {
    // 1. Capturar datos
    const horasTexto = preguntar("Ingrese las horas trabajadas por día: ");
    const valorTexto = preguntar("Ingrese el valor de la hora: ");
    const diasTexto = preguntar("Ingrese los días totales del periodo: ");
    const faltasTexto = preguntar("Ingrese los días de inasistencia: ");

    // 2. Adaptar y Validar
    const entidadLimpia = adaptarEntrada(horasTexto, valorTexto, diasTexto, faltasTexto);

    // 3. Calcular
    const resultado = generarLiquidacion(entidadLimpia);

    // 4. Mostrar
    mostrarResultados(resultado);

  } catch (error) {
    mostrarError(error.message);
  }
};

// Ejecutar el orquestador
iniciarAplicacion();