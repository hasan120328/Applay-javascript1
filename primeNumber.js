
 function primeNumber(n){
    for(i=2 ; i<n-1; i++){
        if(n%2==0){
            return 'not a prime number';
        }
       
    }
    return 'your number is prime number'
  
 }

 var result=primeNumber (33)
 console.log(result);