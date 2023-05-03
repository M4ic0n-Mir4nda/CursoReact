const express = require('express');
const routesLivros = require('./routes/livroRoutes')
const routesFavoritos = require('./routes/favoritoRoute')
const cors = require('cors')
const app = express()
const port = 5000

app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', routesLivros)
app.use('/favoritos', routesFavoritos)

app.listen(port, () => {
    console.log(`escutando em http://localhost:${port}`)
})