function acaoBotao(){
    var i, n, fat;
    fat = 1
    n = prompt("entre com um numero inteiro: ")
    for(i = 1; i <= n; i++){
        fat *= i
    }

    document.getElementById("paragrafo").innerText = "O fatorial de " + n + " eh " + fat
}
