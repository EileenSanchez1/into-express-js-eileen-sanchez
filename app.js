const express = require('express');
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("API de aprendices,Endpoint principal ");
});


app.get("/aprendices", (req, res) => {
  const aprendices = [
    {
      id: 1,
      nombre: "Eileen Sanchez",
      edad: 17,
      correo: "eileensanchez49@gmail.com",
      imgPerfil: "https://"
    },
    {
      id: 2,
      nombre: "Valeria Sandoval",
      edad: 18,
      correo: "valxsc03@gmail.com",
      imgPerfil: "https://"
    },
    {
      id: 3,
      nombre: "Sofia Nieto",
      edad: 19,
      correo: "sofianieto1@gmail.com",
      imgPerfil: "https://"
    }
  ];

  res.json(aprendices);
});


app.listen(port, function() {
  console.log(`SERVIDOR:http://localhost:${port}`);
});