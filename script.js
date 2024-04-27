function contar() {
    let inic = document.getElementById('inicio')
    let fim  = document.getElementById('fim')
    let passo = document.getElementById('passo') 
    let res = document.getElementById('res')

    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = "impossivel contar!"
    }else{
        res.innerHTML = "contando...</br>"
        let i = Number(inic.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('passo inválido! considerando passo 1')
            p = 1 
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} 👍`
            } 
        } else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} 👍`
            }  
        }
        res.innerHTML += ` 🏴`
    }
}