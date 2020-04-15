function sumEvenNumbers(input){
    var sum = 0;
    for(var i = 0; i < input.length; i++){
        if(input[i] % 2 == 0){
            sum = sum + input[i];
        }
    }
    return sum;
}