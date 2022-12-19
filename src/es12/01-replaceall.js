// const inputText = "If you're :) and you know it :clap your hands :clap :clap"

// const emojiReplace = (text) => {
//     let emojized = ""
//     emojized = text.replaceAll(':)', '😀')
//     emojized = emojized.replaceAll(':clap', '👏🏻')

//     return emojized
// }

// console.log(emojiReplace(inputText));

const mensaje = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

mensaje.replace("JavaScript", "Python")
// 'Python es maravilloso, con JavaScript puedo crear el futuro de la web.'
console.log(mensaje.replace("JavaScript", "Python"));

mensaje.replaceAll("JavaScript", "Python")
// 'Python es maravilloso, con Python puedo crear el futuro de la web.'
console.log(mensaje.replaceAll("JavaScript", "Python"));

mensaje.replaceAll(/a/g, "*")
// 'J*v*Script es m*r*villoso, con J*v*Script puedo cre*r el futuro de l* web.'
console.log(mensaje.replaceAll(/a/g, "*"));