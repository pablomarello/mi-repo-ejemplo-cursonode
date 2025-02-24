import os from 'os';

//Obtener la arquitectura del sistema
console.log('Arquitectura del sistema:', os.arch());

//Obtener el tipo de sistema operativo
console.log('Platafoma:', os.platform());

//Obtener la cantidad total de memoria
console.log('Memoria total:', os.totalmem());

//Obtener memoria libre
console.log('Memoria libre:', os.freemem());

//Obtener información de la CPU
console.log('Información de la CPU:', os.cpus());