function arrayPlusArray(arr1, arr2) {
    //return arr1 + arr2; //something went wrong
    var sumOne = 0;
    var sumTwo = 0;
    
    for ( var i = 0; i < arr1.length;i++) {
      sumOne = sumOne + arr1[i];
    }
    console.log(sumOne);
    for ( var y = 0; y < arr2.length;y++) {
      sumTwo = sumTwo + arr2[y];
    }
    console.log(sumTwo);
    var result = sumOne + sumTwo;
    
    return result;
    
  }