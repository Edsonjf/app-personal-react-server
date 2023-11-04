const { getTodosExercicios, getExercicioPorId, insereExercicio, modificaExercicio, deleteExercicioPorId } = require("../servicos/exercicio")

function getExercicios(req, res) {
   try {
       const exercicios = getTodosExercicios()
       res.send(exercicios)
   } catch (error) {
       res.status(500)
       res.send(error.message)
   }
}

function getExercicio(req, res) {
   try {
       const id = req.params.id

       if(id && Number(id)) {
           const exercicio = getExercicioPorId(id)
           res.send(exercicio)
       } else {
           res.status(422)
           res.send("Id inválido")
       }
   } catch (error) {
       res.status(500)
       res.send(error.message)
   }
}

function postExercicio(req, res) {
    try {
        const exercicioNovo = req.body
        if(req.body.nome) {
            insereExercicio(exercicioNovo)
            res.status(201)
            res.send("Livro inserido com sucesso")
        } else {
            res.status(422)
            res.send("O campo nome é obrigatório")
        }
 
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
 }

function patchExercicio(req, res) {
   try {
       const id = req.params.id

       if(id && Number(id)) {
           const body = req.body
           modificaExercicio(body, id)
           res.send("Item modificado com sucesso")
       } else {
           res.status(422)
           res.send("Id inválido")
       }

   } catch(error) {
       res.status(500)
       res.send(error.message)
   }
}

function deleteExercicio(req, res) {
   try {
       const id = req.params.id

       if(id && Number(id)) {
           deleteExercicioPorId(id)
           res.send("livro deletado com sucesso")
       } else {
           res.status(422)
           res.send("ID inválido")
       }
   } catch (error) {
       res.status(500)
       res.send(error.message)
   }
}

module.exports = {
   getExercicios,
   getExercicio,
   postExercicio,
   patchExercicio,
   deleteExercicio
}