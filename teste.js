const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("exercicios.json"))
const novoDado = { id: '5', nome: 'Terra' }

fs.writeFileSync("exercicios.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("exercicios.json")))