const messages = [
  "No soy vago, estoy en modo ahorro de energía",
  "No renuncies a tus sueños... Sigue durmiendo",
  "Hay dos palabras que te abrirán muchas puertas: Tire y Empuje",
  "Siembra un árbol y harás feliz a un perro",
  "Si el mundo es un pañuelo, ¿nosotros qué somos?",
  "Previsión del tiempo para esta noche: estará oscuro",
  "El tiempo sin ti es empo",
  "Al que madruga, nadie le hace el desayuno",
  "No esperen mucho de mi porque a veces la indirecta es pa' mi mismo y la comparto acá.",
  "Si Mahoma no va a la montaña, es porque ya se está subiendo a otro monte.",
  "No entiendo, si hay chile del que no pica, ¿por qué no hay amor del que no duele?",
  "Podré oler a cerveza, pero nunca a otro amorcito que no sea el mío.",
]

const randomMsg = () => {
  const message = messages[Math.floor(Math.random()* messages.length)];
  console.log(message);
}

module.exports = {randomMsg};