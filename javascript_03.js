/*Crie um aloritmo que leia 10 letras e mostre dsomente as consoante*/



const consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
let letras = [];
let mensagem = '';

// Lê 10 letras do usuário
for (let i = 0; i < 10; i++) {
    letras.push(prompt(`Informe a ${i + 1}ª letra:`));
}

// Filtra e exibe apenas as consoantes
for (let i = 0; i < letras.length; i++) {

    //Verifica se a letra atual é uma consoante.
    if (consoantes.includes(letras[i])) {

        //Se for uma letra, irá ser adicionada á string.
        
        if (mensagem.length > 0) {
            mensagem += ', ';
        }
        mensagem += letras[i];
    }
}

alert(mensagem);