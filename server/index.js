const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const controllerFile = require('./controller')


app.get("/api/compliment", controllerFile.getCompliment);
app.post('/api/compliment', controllerFile.getFortune)
app.put('/api/compliment', controllerFile.getLuck)


app.listen(4000, () => console.log("Server running on 4000"));
