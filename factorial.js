function factorial(n){
    var factorial=1;
    for(var i=1; i<=n ;i++ ){
        factorial= factorial*i;
        
      } 
      return factorial;
      
}

 var fact = factorial(10);
console.log(fact);

var fact1=factorial(3);
console.log(fact1)
