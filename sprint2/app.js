const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar MongoDB', error));

const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  createdAt: { type: String, default: Date.now },
  creador: String
}, { collection: 'Grupo-17' } );

const SuperHero = mongoose.model('SuperHero', superheroSchema);

//funcion para insertar un nuevo superheroe
async function insertSuperHero() {
  const hero = new SuperHero({
    nombreSuperHeroe: 'Spiderman',
    nombreReal: 'Peter Parker',
    edad: 25,
    planetaOrigen: 'Tierra' ,
    debilidad: 'Radioactiva',
    poderes: ['Trepar paredes', 'Sentido arácnido', 'Super fuerza', 'Agilidad'],
    aliados: ['Ironman'],
    enemigos: ['Duende verde'],
    creador: 'Pablo.M'
  });
  await hero.save();
  console.log('Superhéroe insertado:', hero);
}

//insertSuperHero();

//funcion para actualizar un superheroe
async function updateSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.updateOne(
    { nombreSuperHeroe: nombreSuperHeroe },
    { $set: { edad: 26 } }
  );
  console.log('Resultado de la actualización:', result);
}

//updateSuperHero('Spiderman');


//funcion para eliminar un superheroe
async function deleteSuperHero(nombreSuperHeroe) {
  const result = await SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperHeroe });
  console.log('Superhéroe Eliminado', result);
}

//deleteSuperHero('Spiderman');

//funcion para buscar un superheroes cuyo planeta de origen es Tierra
async function findSuperHero(){
  const heroes = await SuperHero.find({ planetaOrigen: 'Tierra' });
  console.log('Superhéroes encontrados:', heroes);
}

//findSuperHero();