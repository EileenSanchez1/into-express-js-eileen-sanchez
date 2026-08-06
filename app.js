require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_, res) => {
  res.send('Hola , estamos aprendiendo express con la ficha 3407184');
});

app.get("/Ruta1", (_, res) => {
  res.json({
    datos_personales: {
      nombre: "Eileen",
      apellido: "Sanchez",
      ListaTelefono: ["3105563740", "3103191929"]
    },
    datos_programa: {
      nombre: "Analisis y desarrollo de software",
      tipo_programa: "Tecnologo",
      ficha: 3407184
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});
