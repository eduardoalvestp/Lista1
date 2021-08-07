{
    let number = parseInt(prompt("Informe o total de alunos:"))
    if((number < 0)||(number == 0)){
        alert("O valor deve ser positivo e diferente de zero!")
    }else{
        let notas = []
        for(let i = 0; i < number; i++){
            let nota = parseInt(prompt("Informe a nota do aluno " + (i + 1)))
            notas.push(nota)
        }
        let menor = 0
        let maior = 10
        for(let i = 0; i < notas.length; i++){
            if(notas[i] > maior)
                maior = notas[i]
            if(notas[i] < menor)
                menor = notas[i]
        }
        alert("Maior nota: " + maior + "\nMenor nota: " + menor)
    }
}