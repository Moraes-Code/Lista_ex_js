function parImp(){
    let numero = Number(prompt("Digite um número: "));

    if(numero % 2 == 0){
        numero = numero + 1
    }else{
        numero += 1
    }

    alert('Resultado: ' + numero);
}