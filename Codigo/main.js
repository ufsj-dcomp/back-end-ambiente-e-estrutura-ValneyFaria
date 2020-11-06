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

app.post("/usuario", (req, resp) => {
    var usuario = req.body;

    connection.query("INSERT INTO usuario SET ?", [usuario], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });

    console.log(usuario);

});

app.post("/cultura", (req, resp) => {
    var cultura = req.body;

    connection.query("INSERT INTO cultura SET ?", [cultura], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });

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

var porta = 3010
app.listen(porta, () => {
    console.log("Hortela - Porta " + porta + "!");
})