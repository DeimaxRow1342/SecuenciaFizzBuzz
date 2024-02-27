function FizzBuzz(numero) {
    const Fizz = numero%3;

    if(Fizz==0){
        return "Fizz";
    }
    return numero + "";
}

export default FizzBuzz;