const movies = require('./db.json')
let globalId = 11

module.exports = {
    getMovies: (req, res, next) => res.status(200).send(movies),
    deleteMovie: (req, res, next) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res, next) => {
        let { title, rating, imageURL } = req.body
        let newMovie = {
            id: globalId,
            title, 
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res, next) => {
        let { id } = req.params
        let updatedMovie = req.body
        updatedMovie.id = +id
        let index = movies.findIndex(elem => +elem.id === +id)
        movies.splice(index, 1, updatedMovie)
        res.status(200).send(movies)
    }
}