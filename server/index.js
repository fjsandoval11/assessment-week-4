const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controllerFile = require('./controller')


app.get("/api/compliment", controllerFile.getCompliment);
app.get('/api/fortune', controllerFile.getFortune)
app.get('/api/luckyNums', controllerFile.getLuck)
app.get(`/api/channel`, controllerFile.getChannel)
app.post('/api/movies', controllerFile.createMovie)
app.get(`/api/movies`, controllerFile.getMovies)


app.listen(4000, () => console.log("Server running on 4000"));
