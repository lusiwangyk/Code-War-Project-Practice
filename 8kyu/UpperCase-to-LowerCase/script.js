String.prototype.toAlternatingCase = function () {
    var stringArray = this.toString().split("");
    for(var i = 0; i < stringArray.length; i++) {
      if(stringArray[i].toString().charCodeAt() >= 65 && stringArray[i].toString().charCodeAt() <= 90){
        stringArray[i] = stringArray[i].toString().toLowerCase();
      }
      else if (stringArray[i].toString().charCodeAt() >= 97 && stringArray[i].toString().charCodeAt() <= 122){
        stringArray[i] = stringArray[i].toString().toUpperCase();
      }
    }
    return stringArray.join("");
  }