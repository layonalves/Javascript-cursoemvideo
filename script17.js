/*function tabuada() {
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');

    if (num.length === 0) {
        window.alert('Por favor, digite um número.');
        return; // Encerrar a função se o campo estiver vazio
    }

    tab.innerHTML = ''; // Limpar qualquer conteúdo anterior da lista de opções

    for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.text = `${num} x ${i} = ${num * i}`;
        tab.appendChild(option);
    }
}
*/



function tabuada(){
    let num = document.getElementById('txtn');
    let tab = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número.');
    } else {
        let n = Number(num.value)  
        let c = 1
        tab.innerHTML = '' //limpa a seleção.
        while(c <= 10){
            let item = document.createElement('option') //cria elemetos do tipo option
            item.text = `${n} x ${c} = ${n*c}` //
            item.value = `${c}`
            tab.appendChild(item)
            c++ 
        }

    }
}
