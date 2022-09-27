// Desafio 1

function compareTrue(param1,param2) {
  if(param1 === true && param2 === true){
    return true
  } else {return false}
}
// Desafio 2
function calcArea(base,altura) {
  return (base * altura)/2
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ")
}

// Desafio 4
function concatName(string) {
    return string[string.length -1] + ', ' + string[0]
     }
  

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(numeros) {
  let contaRepetido = 0;
  let contaNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros){
    let verifica = numeros[index];
    for (let indexDois in numeros){
      if(verifica === numeros[indexDois]){
        contaNumero +=1;
      }
    }
    if (contaNumero > contaRepetido){
      contaRepetido = contaNumero;
      indexNumeroRepetido = index
    }
    contaNumero = 0
  }
  return numeros[indexNumeroRepetido]
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return 'cat2'} 
    else if(Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
      return 'cat1'
    } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
      return 'os gatos trombam e o rato foge'
    }
}
console.log(catAndMouse(5,8,2))

// Desafio 8

function fizzBuzz(numeros) {
  let resultadoFB = []
  for(let index in numeros){
    if(numeros[index] % 3 === 0 && numeros[index] % 5 ===0){
      resultadoFB.push('fizzBuzz') 
    } else if(numeros[index] % 3 === 0 && numeros[index] % 5 != 0){
      resultadoFB.push('fizz')
    }else if (numeros[index] % 3 != 0 && numeros[index] % 5 === 0){
      resultadoFB.push('buzz')
    }else if (numeros[index] % 3 != 0 && numeros[index] % 5 != 0){
      resultadoFB.push('bug!')
    }
  }
  return resultadoFB
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
