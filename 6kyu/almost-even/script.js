var splitInteger = function(num, parts) {
    let result = [];
    if (parts === 1) {
      result = [num];
      return result;
    }
    else if (num%parts === 0){
      let element = num/parts ;
      for (let i =0 ; i < parts; i++) {
        result.push(element);
      }
      return result;
    }
    else if (num%parts !== 0) {
      let min = Math.floor(num/parts);
      let remainder = num - min * parts;
      let max = min + remainder/remainder;
      for (let y = 0; y < parts - remainder; y++) {
        result.push(min);
      }
      console.log(result);
      for (let z = 0; z < remainder; z++){
        result.push(max);
      }
      return result;
    }
    
  }