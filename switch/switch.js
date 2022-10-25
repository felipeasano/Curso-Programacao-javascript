function acaoBotao(){
    var val1, val2, res, op
    val1 = prompt("Primeiro Valor: ")
    op = prompt("Entre com a operacao: +,-,*,/")
    val2 = prompt("Segundo Valor: ")

    switch(op){
        case "+": res = parseInt(val1) + parseInt(val2)
            break
        case "-": res = parseInt(val1) - parseInt(val2)
            break
        case "*": res = parseInt(val1) * parseInt(val2)
            break
        case "/": res = parseInt(val1) / parseInt(val2)
            break
    }

    document.getElementById = "paragrafo".innerText = resultado
}