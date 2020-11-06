var express = require("express");
var app = express();

var mysql = require("mysql")

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hortela'
})

app.use(express.json());


app.post("/cultura", (req, resp) => {
    var cultura = req.body;
    console.log(cultura);
});

app.get("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("GET - CulturaId " + culturaId)

    connection.query("SELECT * FROM cultura WHERE idcultura = ?", [culturaId], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });
});

app.put("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("PUT - CulturaId " + culturaId)
});

app.delete("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    console.log("DELETE - CulturaId " + culturaId)
});

var porta = 3004
app.listen(porta, () => {
    console.log("Hortela - Porta " + porta + "!");
})