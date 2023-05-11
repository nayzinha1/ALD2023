let numero1=Number(prompt("digite o 1° numero"))
let numero2=Number(prompt("digite o 2° numero"))
let numero3=Number(prompt("digite o 3° numero"))

if (numero1 > numero2 && numero1 > numero3){
    document.write(`o maior numero é ${numero1}`)
}
else if (numero2 > numero1 && numero2 > numero3){
    document.write(`o maior numero é ${numero2}`)
}
else if (numero3 > numero1 && numero3 > numero2){
    document.write(`o maior numero é ${numero3}`)
}
else{
    document.write(`todos são iguais`)
}