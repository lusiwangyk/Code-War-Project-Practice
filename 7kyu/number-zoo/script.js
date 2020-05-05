function findNumber(array) {
    let n = array.length + 1;
    let sum = (1+n)*n/2;
    let total = 0;
    
    for (let i = 0 ; i < array.length; i++){
      total = total + array[i];
    }
    return sum - total;
  }