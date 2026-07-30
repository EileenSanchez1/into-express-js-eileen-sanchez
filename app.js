import express from 'express'; // <--- Método ES (ESM)
import {configDotenv} from "dotenv"
configDotenv()
import bodyParser from "body-parser";

const app = express();
const port= process.env.PORT || 3000;

//Configurar el uso  de body.parser para la aplicacion
app.use(express.json())
app.use(express.urlencoded({extended: true}))

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

app.get("/saludo/:nombre", (req, res) => {
    const { nombre } = req.params;
    // Si tiene menos de 3 letras, mostrar el error 400
    if (nombre.length < 3) {
        return res.status(400).json({
            error: "El nombre debe tener al menos 3 letras"
        });
    }
    res.send(`Hola ${nombre}, bienvenido`);
});


app.get("/producto/:nombre" , (req,res)=>{
  const { nombre } = req.params;
  res.json({
    id:1,
    Nombre:nombre,
    Stock:25,
    Precio:15000,
    Categoria:"Tecnologia"
  });
})

app.get("/product/:categoria/:id" , (req,res)=>{
  const { categoria, id } = req.params;
  res.json({
    Servidor:"Express",
    categoria,
    id
  });
});

app.get("/usuarios/:id/posts", (req, res) => {
  const { id } = req.params;
  const { orden = "asc" } = req.query;

  const publicaciones = [
    "Primer Post",
    "Segundo Post",
    "Tercer Post"
  ];

  if (orden === "desc") {
    publicaciones.reverse();
  }

  res.json({
    usuario: id,
    orden,
    publicaciones
  });
});

app.get("/usuarios/:id/posts_:postId/comentarios", (req, res) => {
  const { id, postId } = req.params;
  const { orden = "asc" } = req.query;

  let comentarios = [
    "Excelente publicación",
    "Muy útil",
    "Gracias por compartir"
  ];

  if (orden === "desc") {
    comentarios.reverse();
  }

  res.json({
    usuario: id,
    post: postId,
    orden,
    comentarios
  });
});

const libros = [
  {
    isbn: "111",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez"
  },
  {
    isbn: "222",
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry"
  },
  {
    isbn: "333",
    titulo: "Don Quijote",
    autor: "Miguel de Cervantes"
  }
];

app.get("/libros/:isbn", (req, res) => {
  const { isbn } = req.params;

  const libro = libros.find(libro => libro.isbn === isbn);

  if (!libro) {
    return res.status(404).json({
      mensaje: "Libro no encontrado"
    });
  }

  res.json(libro);
});


app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto: ${port}`);
});