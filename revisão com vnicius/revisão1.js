// function ola(){
//     console.log('Função olá')
// }
// ola()

// const ola2 = () =>{
//     console.log('Arrow function - olá2')
// }
// ola2()

// function situacao (nota,media){
//     if(nota>=media){
//         console.log('Aprovado')
//     } else {
//         console.log('Reprovado')
//     }
// }
// situacao(9,6)


// const situacao2 = (nota, media) => {
//     if (nota >= media) {
//         console.log('Aprovado')
//     } else {
//         console.log('Reprovado')
//     }
// }
// situacao2(9, 6)

// Exercicio 1
// Como eu resolvi:
function conceito(nome, nota1, nota2, nota3, nota4, media) {
    if ((nota1 + nota2 + nota3 + nota4)/4 >= media) {
        console.log('O aluno ' + nome + ' está aprovado com a média ' + (nota1 + nota2 + nota3 + nota4)/4 )
    } else {
        console.log('O aluno ' + nome + ' está eprovado com a média' + (nota1 + nota2 + nota3 + nota4)/4)
    }
}

conceito("Dáilla", 5, 7, 8, 9, 7)


// Como o professor solucionou:
function conceito(nome,n1,n2,n3,n4,media){
    const md=(n1+n2+n3+n4)/4
    if(md>=media){
        console.log(`O aluno ${nome} está Aprovado com média: ${md}`)
    }else{
        console.log(`O aluno ${nome} está Em Recuperação com média: ${md}`)
    }
}
conceito('Vinicius',8,7,9,5,7)

//Solução do novo desafio: 
// Como o professor solucionou:
function conceito(nome,n1,n2,n3,n4,media){
    const md=(n1+n2+n3+n4)/4
    if(md>=media){
        console.log(`O aluno ${nome} está Aprovado com média: ${md}`)
    }else{
        const mediaRecuperacao = recupera(md,8)
        if (mediaRecuperacao >= media) {
            return (`O ${nome} está em recuperacao com média: ${mediaRecuperacao} - Aluno aprovado` )
        } else {
            return (`O aluno ${nome} está em recuperação com média: ${md} - Média de recuperação:  `)
        }
    }
}
conceito('Vinicius',8,7,9,5,7)