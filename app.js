const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const ListaAprendices = [
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

app.get("/", function(req, res) {
  res.send("API de aprendices, Endpoint principal");
});

app.get("/aprendices", (req, res) => {
  res.json(ListaAprendices);
});

app.get("/aprendices/nombre/:nombre", (req, res) => {
  const { nombre } = req.params;

  const aprendizEncontrado = ListaAprendices.find(aprendiz => 
    aprendiz.nombre.toLowerCase().includes(nombre.toLowerCase())
  );

  if (aprendizEncontrado) {
    res.json(aprendizEncontrado);
  } else {
    res.status(404).json({ mensaje: "Aprendiz no encontrado" });
  }
});

app.post("/aprendices", (req, res) => {
  const { nombre, edad, correo, imgPerfil } = req.body;

  if (!nombre || nombre.trim().length < 3) {
    return res.status(400).json({ mensaje: "El nombre es obligatorio y debe tener al menos 3 caracteres" });
  }

  const regexCorreo = /^\S+@\S+\.\S+$/;
  if (!correo || !regexCorreo.test(correo.trim())) {
    return res.status(400).json({ mensaje: "El correo es obligatorio y debe tener un formato válido" });
  }

  const nuevoId = ListaAprendices.length > 0 ? ListaAprendices[ListaAprendices.length - 1].id + 1 : 1;

  const nuevoAprendiz = {
    id: nuevoId,
    nombre: nombre.trim(),
    edad: parseInt(edad) || 0,
    correo: correo.trim(),
    imgPerfil: imgPerfil || ""
  };

  ListaAprendices.push(nuevoAprendiz);

  res.status(201).json({
    "mensaje": "aprendiz creado exitosamente",
    "Datos": nuevoAprendiz
  });
});

app.listen(port, function() {
  console.log(`SERVIDOR:http://localhost:${port}`);
});