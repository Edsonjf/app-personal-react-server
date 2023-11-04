const { Router } = require("express")
const { getExercicios, getExercicio, postExercicio, patchExercicio, deleteExercicio } = require('../controladores/exercicio')

const router = Router()

router.get('/', getExercicios)

router.get('/:id', getExercicio)

router.post('/', postExercicio)

router.patch('/:id', patchExercicio)

router.delete('/:id', deleteExercicio)

module.exports = router