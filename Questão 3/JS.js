{
    let number = parseInt(prompt("Informe um número:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let ret = ""
        let i = 0
        while(i <= number){
            if(i % 2 != 0){
                ret = ret + i + ", "
            }
            i++
        }
        alert(ret)
    }
} 