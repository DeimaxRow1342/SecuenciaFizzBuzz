function FizzBuzz(numero) {
    const Fizz = numero%3;
    if(Fizz==0){
        return "Fizz";
    }

    if(numero==5){
        return "Buzz";
    }
    return numero + "";
}

export default FizzBuzz;