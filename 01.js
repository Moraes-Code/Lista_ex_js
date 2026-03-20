// console.log("Hello World!")

// let nome = "João";
// console.log(nome);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;

// console.log(n1 + n2);

// function saudacao() {
//     console.log("Olá meu nome é " + nome);
// }

// function somar(x, y){
//     console.log(x + y);
// };

// saudacao();
// somar(4, 5);

    function somarNumeros(){
        let soma = 0;
        let continuar = true;

        while(continuar){
            let numero = parseFloat(prompt("Digíte um numero ( ou digite '0' para encerrar);"));

            //soma + soma + numero;
        

            if(isNaN (numero)){
                alert(" Por Favor, digite um valor válido");
            }else{
                soma += numero;
            }
            continuar = confirm(" deseja adicionar mais um numero");
        }
        alert(" A soma dos numeros é: " + soma);
    }

    somarNumeros();