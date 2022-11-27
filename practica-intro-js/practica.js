import readline from 'readline';

const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos', 'nacho', 'fernando'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia', 'ester', 'marina'];
const availableGenders = ['male', 'female'];

const students = [
  {
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 34,
    examScores: [],
    gender: 'male',
    name: 'Leo'
  },
  {
    age: 33,
    examScores: [],
    gender: 'female',
    name: 'Luisa'
  },
  {
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'Virginia'
  }, 
  {
    age: 46,
    examScores: [],
    gender: 'female',
    name: 'Fiorella'
  }, 
  {
    age: 53,
    examScores: [],
    gender: 'male',
    name: 'Esteban'
  }, 
]   

const femNumber = students.filter(student => student.gender === "female")
const maleNumber = students.filter(student => student.gender === "male")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const intNumber = (str) => { 
  const integer = parseInt(str);
  if(Number.isNaN(integer)) { 
      return false
  } else {
      return true
  }
}
function getNumberFromConsole() {
  const promise = new Promise((resolve, reject) => {
    rl.question('Enter a number from 1 to 15: ', (num) => {
      rl.pause();
      if(intNumber(num)) {
        num = Number.parseInt(num);
        resolve(num)
    }
      else{
        reject('The option you chose is not correct, try again')
      }
      })
    })
      return promise;
    }

async function playGame(){
 
    let numberFromConsole;
    const gameRules = 
    '\n1- Mostrar en formato de tabla todos los alumnos.'+ 
    '\n2- Mostrar por consola la cantidad de alumnos que hay en clase.'+
    '\n3- Mostrar por consola todos los nombres de los alumnos'+
    '\n4- Eliminar el último alumno de la clase.'+
    '\n5- Eliminar un alumno aleatoriamente de la clase.'+
    '\n6- Mostrar por consola todos los datos de los alumnos que son chicas.'+
    '\n7- Mostrar por consola el número de chicos y chicas que hay en la clase.'+
    '\n8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.'+
    '\n9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.'+
    '\n10- Añadir un alumno nuevo con los siguientes datos: nombre aleatorio, edad aleatoria entre 20 y 50 años, género aleatorio, listado de calificaciones vacío. ¡OJO!, el nombre y el género tienen que ir acordes.'+
    '\n11- Mostrar por consola el nombre de la persona más joven de la clase. ¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida.'+
    '\n12- Mostrar por consola la edad media de todos los alumnos de la clase.'+
    '\n13- Mostrar por consola la edad media de las chicas de la clase.'+
    '\n14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.'+
    '\n15- Ordenar el array de alumnos alfabéticamente según su nombre.'
      console.log(gameRules)
  do {
    try {
      numberFromConsole = await getNumberFromConsole();
    
      switch(numberFromConsole) {       
        case 1:
        // 1- Mostrar en formato de tabla todos los alumnos.
          console.table(students)        
        case 2: 
        // 2- Mostrar por consola la cantidad de alumnos que hay en clase.
          console.log(students.length)
          break;
        case 3:
        // 3- Mostrar por consola todos los nombres de los alumnos.
          console.log(students.map(a => a.name))
          break;
        case 4:
        // 4- Eliminar el último alumno de la clase.
          students.pop()
          console.log(students)
          break;
        case 5:
        // 5- Eliminar un alumno aleatoriamente de la clase.
          students.splice((Math.random() * students.length) | 0, 1); // me elimina uno al azar y devuelve el elemento eliminado.
          console.log(students) // me muestra el array sin el elemento previamente eliminado.
          break;
        case 6:
        // 6- Mostrar por consola todos los datos de los alumnos que son chicas.
          console.log(students.filter(student => student.gender === "female"));
          break;
        case 7:
        // 7- Mostrar por consola el número de chicos y chicas que hay en la clase.
          console.log("There are", femNumber.length, "women");
          console.log("There are", maleNumber.length, "men")
          break;
        case 8:
        // 8- Mostrar true o false por consola si todos los alumnos de la clase son chicas.
          console.log(femNumber.length === students.length)
          break;
        case 9:
        // 9- Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.
          let ageRange = students.filter(student => student.age >= 20 && student.age <= 25);
          ageRange.map(x => console.log(x.name));
          break;
        case 10:
        /* 10- Añadir un alumno nuevo con los siguientes datos:nombre aleatorio, edad aleatoria entre 20 y 50 años, 
          género aleatorio, listado de calificaciones vacío. ¡OJO!, el nombre y el género tienen que ir acordes. */
          function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }          
          let randomGender = availableGenders[(Math.random() * availableGenders.length) | 0]    

          function randomName(randomGender){
          if (randomGender === 'female') {
            return availableFemaleNames[(Math.random() * availableFemaleNames.length) | 0]
          } else {
            return availableMaleNames[(Math.random() * availableMaleNames.length) | 0]
          }
          } 
          let newstudent = {
            age: getRandomNumber(20, 50),
            examScores: [],
            gender: randomGender,
            name: randomName(randomGender)
          }

          students.push(newstudent)
          console.log(students)
          break;
        
        case 11:
        // 11- Mostrar por consola el nombre de la persona más joven de la clase.
          students.sort(function(a, b) {
            return parseFloat(a.age) - parseFloat(b.age);
          })
          console.log(students[0].name)
          break;

        case 12:
        // 12- Mostrar por consola la edad media de todos los alumnos de la clase.
          let ageArray = []
          ageArray.push(students.map(x =>(x.age)));
          
          let averageAge = ageArray[0].reduce((a, b) => a + b, 0) / ageArray[0].length;
          console.log(Math.round(averageAge));
          break;
        
        case 13:
        // 13- Mostrar por consola la edad media de las chicas de la clase.
          let femArray = students.filter(student => student.gender === "female");    
          
          let femAverage = []
          femAverage.push(femArray.map(x =>(x.age)));
          
          let AvgFemAge = femAverage[0].reduce((a, b) => a + b, 0) / femAverage[0].length;
          console.log(Math.round(AvgFemAge))
          break;

        case 14:
        // 14- Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.
          students.forEach(student => student.examScores.push((Math.random()*10).toFixed(1)))
          console.table(students)
          break; 
        
        case 15:
        // 15- Ordenar el array de alumnos alfabéticamente según su nombre.
          students.sort(function(a, b) {
            let textA = a.name.toUpperCase();
            let textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            console.log(students)    
            break;

        default:
          rl.close() 
      }
  } 
    catch(error) {
      console.log(error)
      process.exit(0)
  }
} while (numberFromConsole > 0 && numberFromConsole <= 15);
}

playGame();

  
  
  
  
  
 