 function cualEsMayor(n1,n2,n3){
    let resultado;
    if (n1 >= n2 && n1 >= n3) {
      resultado=n1;
    } else {
      if (n2 >= n3) {
        resultado=n2;
      } else {
        resultado=n3;
      }
      
    }
    return (resultado); 
 } 

 console.log(cualEsMayor(2,10,9));

    
 
