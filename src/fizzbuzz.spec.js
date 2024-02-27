import FizzBuzz from "./fizzbuzz.js";

describe("Sumar", () => {
    it("Se retorna el mismo numero para uno que no sigue las reglas", () => {
        expect(FizzBuzz(1)).toEqual("1");
    });
});