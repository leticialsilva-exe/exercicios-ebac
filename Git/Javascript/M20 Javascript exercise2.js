// 2. 
// Dado um array numérico qualquer sem valores repetidos, 
// descubra qual é o índice do maior valor e o índice do menor valor. 

const array = [21,10,3,6,0,21]
let maior=0, menor=999

array.forEach(element => {
    if (element>maior) 
        maior = element
    if (element<menor) 
        menor = element
});

console.log(`O Maior valor é: ${maior} e o Menor valor é ${menor}`)
