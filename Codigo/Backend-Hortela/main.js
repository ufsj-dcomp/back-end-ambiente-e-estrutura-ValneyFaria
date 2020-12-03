var express = require("express");
var cors = require("cors");
var jwt = require("jsonwebtoken");
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

// Rota para autenticação
app.post('/auth', (req, resp) => {
    var user = req.body;
    connection.query("SELECT * FROM usuario WHERE nome = ? and senha = ?", [user.nome, user.senha], (err, result) => {
        var usuario = result[0];

        if (result.length == 0) {
            resp.status(401);
            resp.send({ token: null, usuario: usuario, success: false });
        }
        else {
            let token = jwt.sign({ id: usuario.nome }, 'hortela', { expiresIn: 6000 });
            resp.status(200);
            resp.send({ token: token, usuario: usuario, success: true });
        }
    });
});

verifica_token = (req, resp, next) => {
    // Toda requisição do frontend para o back deve ser feita no cabeçalho da requisição
    var token = req.headers['x-access-token'];

    if (!token) {
        return resp.status(401).end();
    }

    jwt.verify(token, 'hortela', (err, decoded) => {
        if (err) {
            return resp.status(401).end();
        }
        req.usuario = decoded.id;
        next();
    })
}

app.get("/cultura", verifica_token, (req, resp) => {
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

app.post("/cultura", verifica_token, (req, resp) => {
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

app.get("/cultura/:culturaId", verifica_token, (req, resp) => {
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

app.put("/cultura/:culturaId", verifica_token, (req, resp) => {
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

app.delete("/cultura/:culturaId", verifica_token, (req, resp) => {
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

app.post("/usuario", verifica_token, (req, resp) => {
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

var porta = 3000
app.listen(porta, () => {
    console.log("Hortela - Porta " + porta + "!");
})