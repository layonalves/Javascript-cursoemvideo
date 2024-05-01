//funções

/*funções são ações a serem executadas assim que forem chamadas
ou em decorrência de algum evento.

uma função pode receber parâmetros e retornar um resultado.

exemplo: "minha mãe me deu dinheiro para ir comprar o leite"

chamada: minha mãe me chamou pra ir comprar leite.
parametro: dinheiro. 
ação: ir até ao mercado, comprar e trazer o leite.
return: entregar o leite e finalizar a requisição de sua mãe.
*/ 


function parimp(n) {
    if(n%2==0){
        return `o numero ${n} é par`
    }else{
        return `o numero ${n} é impar`
    }
}

console.log(parimp(223)); //o valor da inserido retorna ao inicio