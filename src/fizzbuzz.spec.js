import FizzBuzz from "./fizzbuzz.js";
import SecuenciaFizzBuzz from "./secuenciafizzbuzz.js";

describe("Secuencia FizzBuzz", () => {
    it("Se retorna el mismo numero para 1 que no sigue las reglas", () => {
        expect(FizzBuzz(1)).toEqual("1");
    });
    it("Se retorna el mismo numero para un numero que no siga las reglas del FizzBuzz", () => {
        expect(FizzBuzz(2)).toEqual("2");
    });
    it("Se retorna Fizz para el numero 3", () => {
        expect(FizzBuzz(3)).toEqual("Fizz");
    });
    it("Se retorna Fizz para numeros multiplos de 3, como el 6", () => {
        expect(FizzBuzz(6)).toEqual("Fizz");
    });
    it("Se retorna Buzz para el numero 5", () => {
        expect(FizzBuzz(5)).toEqual("Buzz");
    });
    it("Se retorna Buzz para numeros multiplos de 5, como el 10", () => {
        expect(FizzBuzz(10)).toEqual("Buzz");
    });
    it("Se retorna FizzBuzz para numeros multiplos de 3 y 5, como el 15", () => {
        expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });
    it("Se retorna una secuencia de numeros con las reglas FizzBuzz con el limite establecido", () => {
        expect(SecuenciaFizzBuzz(15)).toEqual(["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);
    });
});