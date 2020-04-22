function multiplyAndFilter(array, multiplier){

    var newArray = array.filter(n =>typeof n === "number");
    
    var result = [];
    for (var i = 0;i < newArray.length; i++) {
        var single = newArray[i] * multiplier;
        result.push(single);     
    }
    console.log(result);
    return result;
  }