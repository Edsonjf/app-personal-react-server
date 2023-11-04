const { json } = require("express/lib/response")
const fs = require("fs")

function getTodosExercicios(){
    return JSON.parse(fs.readFileSync("exercicios.json"))
}

function getExercicioPorId(id){
    const exercicios = JSON.parse(fs.readFileSync("exercicios.json"))

    const exercicioFilttrado = exercicios.filter( exercicio => exercicio.id === id)[0]
    return exercicioFilttrado
}

function insereExercicio(exercicioNovo) {
    const exercicios = JSON.parse(fs.readFileSync("exercicios.json"))

    const novaListaDeExercicio = [...exercicios, exercicioNovo ]

    fs.writeFileSync("exercicios.json", JSON.stringify(novaListaDeExercicio))
}

function modificaExercicio(modificacoes, id){
    let exerciciosAtuais = JSON.parse(fs.readFileSync("exercicios.json"))

    const indiceModificado = exerciciosAtuais.findIndex( exercicio => exercicio.id === id)

    const conteudoMudado = { ...exerciciosAtuais[indiceModificado], ...modificacoes }
    // exerciciosAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
    // modificacoes -> {nome: "nome mchu legal"}
    exerciciosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("exercicios.json", JSON.stringify(exerciciosAtuais))
}

function deleteExercicioPorId(id){
    const exercicios = JSON.parse(fs.readFileSync("exercicios.json"))

    const exercicioFiltrados = exercicios.filter( exercicio => exercicio.id !== id)[0]
    fs.writeFileSync("exercicios.json", JSON.stringify(exercicioFiltrados))

}

module.exports= {
    getTodosExercicios,
    getExercicioPorId,
    insereExercicio,
    modificaExercicio,
    deleteExercicioPorId
}