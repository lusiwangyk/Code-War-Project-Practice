function expressionMatter(a, b, c) {
    var num1 = a + b * c;
    var num2 = a * b + c;
    var num3 = a * b * c;
    var num4 = ( a + b ) * c;
    var num5 = a * ( b + c );
    var num6 = a + b + c;
    var maxNum = Math.max(num1, num2, num3, num4, num5, num6);
    return maxNum
    return // highest achievable result
  }