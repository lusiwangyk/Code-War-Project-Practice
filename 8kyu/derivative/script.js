function derive(coefficient,exponent) {
    let result = "";
    let num = coefficient * exponent;
    let secondNum = exponent - 1;
    result = num + "x^" + secondNum;
    console.log(result);
    return result;
    
}