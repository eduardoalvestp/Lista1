{
    let number = parseInt(prompt("Informe o número para verificar se é ou não, triangular:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let result = 1
        let triangular = false
        let numeros = []
        for(let i = 1; i <= number; i++){
            result = 1
            numeros = []
            for(let j = i; j <= (i + 2); j++){
                result = (result * j)
                numeros.push(j)
            }
            if(result === number){
                triangular = true
                break
            }
        }
        if(triangular)
            alert("O número informado é triangular. Números consecutivos multiplicados: " + (numeros))
        else
            alert("O número informado não é triangular.")
    }
}