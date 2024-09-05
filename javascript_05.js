let numeros = []
let impares = []
let pares = []
let mensagem = ""
 
//Leitura de 20 números inteiros
for(n = 0; n < 20; n++){ //repetir o conteudo abaixo até 20x
 
    let num = (parseInt(prompt(`Informe o ${n+1}° número`)));
   
    numeros.push(num);
 
    /* Verifica se o numero é par ou impar, dividido por 2 se sobrar
    resto é porque é impar. */
    if (num % 2 === 0) {
        pares.push(num)
    }else {
        impares.push(num)
    }
}
mensagem = `números: ${numeros} \n pares: ${pares} \n impares: ${impares}`
alert(mensagem)
 