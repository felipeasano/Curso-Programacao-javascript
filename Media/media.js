var nota1, nota2, media
nota1 = prompt("insira a primeira nota: ")
nota2 = prompt("insira a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if(media >= 50) alert("Aprovado!")
else alert("Reprovado")

alert("media = " + media)