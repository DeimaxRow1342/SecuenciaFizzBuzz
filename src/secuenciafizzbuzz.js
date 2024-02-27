import FizzBuzz from "./fizzbuzz.js";

function SecuenciaFizzBuzz(numero) {
    const secuencia = [];

    for(let i=0; i<numero; i++){
        secuencia[i] = FizzBuzz(i+1);
    }

    return secuencia;
}

export default SecuenciaFizzBuzz;