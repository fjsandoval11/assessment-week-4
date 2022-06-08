const favMovies = require('./movieDb.json')
let globalId = 2

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
                        'A dubious friend may be an enemy in camouflage.',
                        'A faithful friend is a strong defense.',
                        'A fresh start will put you on your way.', 
                        'A hunch is creativity trying to tell you something.']

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    getLuck: (req,res) => {

        let luckyNums = []

        for (i = 0, j = 5; i <= j; i++){
            luckyNums.push(Math.floor(Math.random() * 100))
        
        }
         res.status(200).send(luckyNums)

    },
    getChannel: (req,res) => {
        let channel = 'show of the day is : Ed,Edd, and Eddy'
        res.status(200).send(channel)
    },

    createMovie: (req,res) => {
        const {movieTitle} = req.body
        let newMovie = {
            globalId,
            movieTitle
        }
        favMovies.push(newMovie)
        globalId++
        res.status(200).send(favMovies)
    },
    getMovies: (req, res) => {
        res.status(200).send(favMovies)
    }

}