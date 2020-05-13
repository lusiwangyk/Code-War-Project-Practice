function multiples(m, n){
    let result = [];
    for (let i = 1; i < m + 1; i ++){
      let element = n * i;
      result.push(element);
    }
    return result;
  }