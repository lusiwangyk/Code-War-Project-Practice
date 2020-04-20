function abbrevName(name){
    var nameNew = name.split(" ");
    var firstName = nameNew[0];
    var lastName = nameNew[1];

    var arrayOne = firstName.split("");
    var arrayTwo = lastName.split("");
    return arrayOne[0].toUpperCase() + "." + arrayTwo[0].toUpperCase();
    
   
  
}