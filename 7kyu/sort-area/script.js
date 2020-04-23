function sortByArea(array) {
    var newArr = [];
    if(array.length == 0){
      return array;
    }
    else {
      for(var i = 0; i < array.length;i++){
          if ((typeof array[i]) == "number"){
              newArr.push(Number((Math.pow(array[i],2) * Math.PI).toFixed(2)));
              console.log(newArr);
          }
          else if ((typeof array[i]) == "object"){
            newArr.push(Number((array[i][0] * array[i][1]).toFixed(2)));
            console.log(newArr);
          }
          
      }
      return newArr.sort((a,b)=>a-b);
      
    }
  } 