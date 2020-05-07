function validPass(password){
    var regax=/^[a-z0-9]+$/i;
    var arr=password.split("");
    var c=0;
    var d=0;
    for(var i=0;i<password.length;i++) {
        if(parseInt(password[i])>0) {
        c+=1;
      } else 
        d+=1;
      
    }
    
    if(password.match(regax) && (password.length<20)&& c>0 && d>0) {
      return 'VALID'
    } else return 'INVALID'
    
    
    }