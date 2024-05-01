 function soma(n1=0, n2=0) {
    return n1 + n2 
 }
 console.log(soma(2, 5));

//usando / com if 

 function divisão(n1=0, n2=0) {
    return n1 / n2 
 }
 console.log(divisão(10, 5));

 //usando - com if

 function subtração(n1=0, n2=0) {
    return n1 - n2 
 }
 console.log(subtração(2, 5));

 //usando * com if

 function multiplicação(n1=0, n2=0) {
    return n1 * n2 
 }
 console.log(multiplicação(2, 5));

 
//usando % com if

 function restodaDIV(n1=0, n2=0) {
    return n1 % n2 
 }
 if(restodaDIV(10, 6)!= 0){
    console.log('[Erro] resto diferente de zero!')
 }else{
    console.log(restodaDIV(10, 6));
 }
