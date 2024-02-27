import FizzBuzz from "./fizzbuzz.js";

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
});