{
    let number = parseInt(prompt("Informe o número desejado:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let ret = 0
        for(let i = 1; i <= number; i++){
            if(i % 2 == 0){
                ret += i
            }
        } 
        alert(ret)
    }
} 