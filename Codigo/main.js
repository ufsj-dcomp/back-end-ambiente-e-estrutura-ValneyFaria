var express = require("express")
var app = express();

app.use(express.json())


app.post("/cultura", (req, resp) => {
    var cultura = req.body;
    console.log(cultura);
});

app.get("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("GET - CulturaId " + culturaId)
});

app.put("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("PUT - CulturaId " + culturaId)
});

app.delete("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("DELETE - CulturaId " + culturaId)
});

var porta = 3001
app.listen(porta, () => {
    console.log("Hortela - Port" + porta + "!");
})