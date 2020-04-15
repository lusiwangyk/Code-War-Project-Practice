function getMinMax(arr){
    if (arr.length == 1) {
      var result = arr[0];
      return [result, result];
    }
    else if (arr.length > 1) {
      var max = Math.max(...arr);
      var min = Math.min(...arr);
      console.log(max);
      console.log(min);
      return [min, max];
    }
  }