/*Crie um aloritmo que leia 4 notas, faça a média e mostre*/
let num = []
let mensagem = ""
let media = 0
let soma = 0


for (let i = 0; i < 4; i++){
    num.push(parseFloat(prompt(`Informe a ${i+1}° nota. `)));
    
    soma += num[i]
}

media = soma/4

for (let i = 0; i < 4; i++){

if(i === num.length -1 ){
    mensagem += `${num[i]}. \n ${media}`;
    
}
else
{
    mensagem += `${num[i]}, `;

}


}

alert(mensagem);