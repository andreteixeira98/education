

function fibonacci(number){
   
    if(number < 2 ) return number;

    return fibonacci(number-1) + fibonacci(number-2)

}

function factorial(n){
    if(n === 0 || n === 1) return 1;

    return n * factorial(n-1);
}