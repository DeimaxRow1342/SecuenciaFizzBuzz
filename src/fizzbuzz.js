function FizzBuzz(numero) {
    const Fizz = numero%3;
    const Buzz = numero%5;

    if(Fizz==0 && Buzz==0){
        return "FizzBuzz";
    }
    if(Fizz==0){
        return "Fizz";
    }
    if(Buzz==0){
        return "Buzz";
    }
    return numero + "";
}

export default FizzBuzz;