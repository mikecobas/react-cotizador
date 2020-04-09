// obtiene la diferencia de años

export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Europeo":
      incremento = 1.3;
      break;
    case "Americano":
      incremento = 1.15;
      break;
    case "Asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

// Calcular el tipo de seguro

export function obtenerPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50
}

// Muestra la primer letra mayuscula

export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() +  texto.slice(1) ;
}
