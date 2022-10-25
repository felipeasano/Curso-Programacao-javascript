function acaoBotao(){
    var nome, idade, limite, i
    limite = prompt("entre com a quantidade de leituras: ")
    i = 0;
    while(i < limite){
        nome = prompt("Entre com o nome de uma pessoa: ")
        idade = prompt("Entre com a idade dessa pessoa: ")
        if(idade > 18)
            document.getElementById("paragrafo").innerText = nome + " eh maior de idade"
        else  
            document.getElementById("paragrafo").innerText = nome + " eh menor de idade"
        i++
    }
}