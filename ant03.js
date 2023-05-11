let n1=Number(prompt("digite sua nota"))
let n2=Number(prompt("digite sua nota"))
let n3=Number(prompt("digite sua nota"))

let media=(n1+n2+n3) / 3
if (media >= 7){
  document.write(`você foi aprovado`)
}
else if (media <7 && media>=5){
  document.write(`você ficou de recuperação`)
}
else{
  document.write(`você foi reprovado`)
}