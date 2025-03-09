// 3. 
// Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, 
// ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne 
// a soma de todos os múltiplos de 5 ou 7 abaixo de 1000

let num =999, soma =0

// console.log(10%5)

while (num>0) {
    if(num%5==0 || num%7==0)
        soma +=num

    num-=1
}

console.log(soma)