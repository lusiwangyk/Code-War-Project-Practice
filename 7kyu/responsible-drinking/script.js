function hydrate(s) {
    var array = s.split(" ");
    console.log(array);
    function filterNum(value){
     if(isNaN(value) === false) {
       return value;
     }
    }
    var num = array.filter(filterNum);
    //console.log(typeof num[0]);
    var sum = 0;
    for (var i =0;i<num.length;i++){
      sum = sum + Number(num[i]);
    }
    console.log(sum);
    if (sum == 1) {
     return sum + " glass of water";
    }
    else if (sum > 1) {
     return sum + " glasses of water";
    }
    
  }