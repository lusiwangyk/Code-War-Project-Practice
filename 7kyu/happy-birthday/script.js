function womensAge(n) {
    if (n%2 == 0) {
      var baseNum = n/2 ;
      return n + "? That's just 20, in base " + baseNum + "!"
    }
    else if (n%2 == 1) {
    var base = (n-1)/2 ;
    return n + "? That's just 21, in base " + base + "!"
    }
  }