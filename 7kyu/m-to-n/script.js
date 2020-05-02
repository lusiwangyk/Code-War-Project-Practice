function generateIntegers(m, n) {
    let array = [m];
    let length = n - m;
    for ( var i = 1; i < length+1;i++){
      array.push(m+i);
    }
    return array;
    console.log(array);
  }