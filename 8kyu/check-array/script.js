function check(a,x){
    // Determine whether x occurs anywhere in the array a
    for (var i = 0; i < a.length; i++){
      if (a[i] == x){
        return true;
      }
    }
    return false;
  };