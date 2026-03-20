function inverte(){

let numeros = [];

for (let i = 0; i < 4 ; i++){
    numeros.push(Number(prompt("Digite um numero:")));
}

numeros.sort((a,b) => a - b)


alert("Odem decrescente:" + numeros);
}