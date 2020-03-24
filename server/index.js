const express = require('express')
const app = express()
app.use(express.json())

const port = 4004

const {
    getMovies,
    deleteMovie, 
    createMovie, 
    updateMovie
} = require('./controller')

app.get(`/api/movies`, getMovies)
app.delete(`/api/movies/:id`, deleteMovie)
app.post(`/api/movies`, createMovie)
app.put(`/api/movies/:id`, updateMovie)

app.listen(port, () => console.log(`running on ${port}`))