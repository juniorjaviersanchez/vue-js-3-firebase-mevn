// Es cuando utilizas las comillas invertidas ``
const sumar = (num1, num2) => {
    return `La suma es ${num1+num2}`;
}
sumar(2,10);

// optimizando
const sumar2 = (num1, num2) => `La suma es ${num1+num2}`;
sumar2(2,15);