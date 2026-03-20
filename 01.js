
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