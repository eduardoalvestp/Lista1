{
    let number = parseInt(prompt("Informe um valor:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let i = parseInt(prompt("Insira um valor para i:"))
        let j = parseInt(prompt("Insira um valor para j:"))
        let multiples = []
        let index = 0
        for(let n = 0; n <= number; n++){
            if((n % i == 0)||(n % j == 0)){
                if(n <= multiples[index]){
                    multiples.unshift(n)
                }else{
                    multiples.push(n)
                }
                index++
            }                       
        }
        alert(multiples)
    }
}