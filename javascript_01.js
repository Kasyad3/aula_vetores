/*Crie um aloritmo que leia um vetor de 5 números inteiros e mostre-os */
let num = []
let mensagem = ""

for (let i = 0; i < 5; i++){
num.push(prompt("informe um n°: "));
}

for (let i = 0; i < 5; i++){
if(i === num.length -1 ){
    mensagem += `${num[i]}.`;
    
}
else
{
    mensagem += `${num[i]}, `;

}

}
alert(mensagem);