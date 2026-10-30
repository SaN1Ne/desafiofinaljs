const prompt = require("prompt-sync")()
const H1 = 8.00
const HADD = 3.00

let hora = Number(prompt(`Quantas horas ficou estacionado: `))

if (hora <= 1) {
    console.log(`R$${H1.toFixed(2)}`)
} else if (hora > 1 && hora <= 8) {
    let vfinal = ((hora - 1) * HADD) + H1
    console.log(`R$${vfinal.toFixed(2)}`)
} else {
    console.log(`R$ 30,00`)
}