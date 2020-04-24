function findScreenHeight(width, ratio) {
    var num = ratio.split(":");
    var length = width * ( num[1]/num[0]);
    console.log(length);
    var result = width +"x"+ length;
    console.log(result)
    return result;
    
}