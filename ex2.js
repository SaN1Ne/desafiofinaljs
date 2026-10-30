const prompt = require("prompt-sync")()

let altura = Number(prompt("Qual a sua altura: "))
let idade = Number(prompt("Qual a sua idade: "))

if (altura >= 1.40) {
    if (idade >= 12) {
        console.log(`Pode entra`)
    } else {
        console.log(`Pode entra com acompanhante`)
    }
} else {
    console.log(`não pode`)
}