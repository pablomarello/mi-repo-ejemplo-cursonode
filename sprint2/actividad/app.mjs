import expres from 'express';

//Crear una instancia de express
const app = expres();

//Configurar el puerto en el que el servidor escuchará
const PORT = 3000;

//ruta básica
app.get('/', (req, res) =>{
  res.send('Server funcionando');
});

//actividad 1: solicitud get con parametro id
//ruta get con parametro de ruta
//Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) =>{
  const userId = req.params.id;
  console.log(`ID del usuario recibido: ${userId}`);
  res.send(`Perfil del usuario con ID: ${userId}`);
});

//actividad 2: solicitud get con parametro edad
//ruta get con parametro de consulta
//Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) =>{
  const edad = req.query.edad;
  console.log(`Edad recibida: ${edad}`);
  res.send(`Edad del perfil: ${edad}`);
});

//Iniciar el servidor
app.listen(PORT, () =>{
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
});