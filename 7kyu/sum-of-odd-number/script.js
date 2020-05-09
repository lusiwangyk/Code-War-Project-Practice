function rowSumOddNumbers(n) {
  

    let min = n * (n-1) + 1 ;
    let max = n * (n+1) - 1 ;
    return ( min + max ) * n /2 ;
    
  
}