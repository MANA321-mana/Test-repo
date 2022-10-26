function Add(n){  
   return n+10;
}

function subtract(n){
    return 100 - n;
}

function multiply(n){
    return n*n;
}

const compose = (...functions) => {
    return (args) => {
        console.log(args);
        return functions.reduceRight((arg, fn) =>  fn(arg), args);
    }
}

const evaluate = compose(Add,subtract,multiply);

console.log(evaluate(0));