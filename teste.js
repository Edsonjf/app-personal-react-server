const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("exercicios.json"))
const novoDado = { id: '6', nome: 'Supino inclinado' }

fs.writeFileSync("exercicios.json", JSON.stringify([...dadosAtuais, novoDado]))

console.log(JSON.parse(fs.readFileSync("exercicios.json")))