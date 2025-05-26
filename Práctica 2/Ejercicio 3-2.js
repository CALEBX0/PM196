const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "Maria", edad: 28 }
];

const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis); 

personas.forEach(persona => {
  console.log(persona.nombre + " tiene " + persona.edad + " años");
});

const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("La suma de todas las edades es: " + totalEdad); 
 