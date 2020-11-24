var express = require("express");
var cors = require("cors");
var app = express();

var mysql = require("mysql")
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hortela'
});

app.use(cors());
app.use(express.json());

app.get("/cultura", (req, resp) => {
    console.log("GET - Cultura");

    connection.query("SELECT * FROM cultura", (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        }
        else {
            resp.status(200);
            resp.json(result);
        }
    });
});

app.post("/cultura", (req, resp) => {
    var cultura = req.body;
    console.log("POST - Cultura");

    connection.query("INSERT INTO cultura SET ?", [cultura], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result.insertedId);
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
    var cultura = req.body;
    console.log("PUT - CulturaId " + culturaId);

    connection.query("UPDATE cultura SET ? WHERE idcultura = ?", [cultura, culturaId], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
        }
    });
});

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

app.delete("/cultura/:culturaId", (req, resp) => {
    var culturaId = req.params.culturaId;
    var cultura = req.body;
    console.log("DELETE - CulturaId " + culturaId);

    connection.query("DELETE FROM cultura WHERE idcultura = ?", [culturaId], (err, result) => {
        if (err) {
            console.log(err);
            resp.status(500).end();
        } else {
            resp.status(200);
            resp.json(result);
        }
    });

});

var porta = 3000
app.listen(porta, () => {
    console.log("Hortela - Porta " + porta + "!");
})