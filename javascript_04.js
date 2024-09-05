/* Crie um algoritmo que leia o salário bruto de 5 pessoas
 e ao final informe o salário liquido deles com o desconto de 12% do FGTS
*/

let salario = []
let inss = []
let mensagem = ""


for (i = 0; i < 5; i++) {
    salario.push(parseFloat(prompt(`Informe o salário da ${i + 1}° pessoa: `)))
    inss[i] = salario[i] - ((salario[i] * 12) / 100)

}

for(i = 0; i < 5; i++){

    mensagem += `${i + 1}° salário com desconto do INSS: ${inss[i].toFixed(2)} \n`
 
}
alert(mensagem)