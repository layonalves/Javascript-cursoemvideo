//algumas definições

/*
num[5] = 6  //add mais um numero de forma inidividual e especificado.
num.push(7)  //add um numero no final.
num.length  //mede o comprimento do meu vetor/array
num.sort()  //coloca em ordem crescente todos os elementos do meu array.
num.sort(function(a, b){return a-b})  //retorna os valores em ordem crescentes independente do valor ter
ser sua primeira casa decimal menor ou não. 
num.indexOf(n) //se o valor existir no vetor, me retorna a key onde ele está
armazenado. no caso de não existir o valor, JS me retorna valor -1.


//usando algumas dessas definições


let num = [5,8,9,7,6]

num.push(1)
num.sort()
console.log(num);
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é ${num[0]}`);

//testando utilizando while

let num = [5,8,9,7,6]
let pos = 0

while (pos < num.length) {
    console.log(`a posicão ${pos} tem o valor ${num[pos]}`);
    pos++  
}
*/

//testando ulizando for


/*
let num = [5,8,9,7,6]

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);   
}
*/ 
 

/*let num = [5,8,9,7,6] //meu array
let pos = 0
num.sort() //organizando em ordem crescente os elementos.

//só funciona em casos de arrays
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`); 
}
*/

let num = [5,8,9,7,6,40]

num.push(1)
num.sort(function(a, b){return a-b})
console.log(num);
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado');
}else{
    console.log(`O valor 8 está na posição ${pos}`);
}






