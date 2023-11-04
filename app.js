const express = require("express")
const rotaExercicio = require('./rotas/exercicio')
const rotaFavorito = require('./rotas/favorito')

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/exercicios', rotaExercicio)
app.use('/favoritos', rotaFavorito)

const port = 8000



app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})