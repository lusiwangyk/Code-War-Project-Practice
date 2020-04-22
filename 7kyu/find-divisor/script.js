unction divisors(integer) {
    var result = [];
    var n = integer;
      if (n == 2){
        return result.push(n);
      }
      else if (n >2) {
        for(var i = 2; i < n ;i++){
          if ( n%i === 0 ){
          result.push(i);
          }
        }
      }
      console.log(result);
      if (result[0]) {
          return result;
      } 
      return n + " is prime";
    };