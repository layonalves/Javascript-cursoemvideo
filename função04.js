//5! = 5 x 4 x 3 x 2 x 1 = 120 
//fatorial de 5

//maneira tradicional de se tirar o fatorial

function fatorial(n) {
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5));


//utilizando Recursividade

//tirar o fatorial de um numero de maneira recursiva. recursão
//é quando uma função é chamada dentro dela mesma.

/* 
5! = 5 x 4 x 3 x 2 x 1 = 120 
5! = 5 x 4! o fatorial de 5 é igual ao proprio 5 vezes o fatorial de 4

n! = n * (n-1)! 
1! = 1
*/

function fatorials(n) {
    if(n == 1){
        return 1
    }else{
        return n * fatorials(n-1)//chamei a função dentro dela.
    }
}

console.log(fatorials(5));


