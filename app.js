import express from 'express'; // <--- Método ES (ESM)
import {configDotenv} from "dotenv"
configDotenv()
import bodyParser from "body-parser";

const app = express();
const port= process.env.PORT || 3000;

//Configurar el uso  de body.parser para la aplicacion
app.use(express.json())
app.use(express.urlencoded({extend: true}))

app.get("/", (_, res) => {
  res.send('Hola , estamos aprendiendo express con la ficha 3407184');
});

app.get("/productos" , (req,res)=>{
  res.send(`<h1>Listado de productos</h1>
    <ol>
    <li>Televisor</li>
    <li>Celular</li>
    <li>Impresora</li>
    </ol>`)
});

app.get("/productos/:nombre" , (req,res)=>{
  const producto = req.params.nombre
  res.send(`El producto es ${producto}`)
})

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});