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
  let count = 0
  let maiorNumero = numeros[0]
  for (let index in numeros){
    if(numeros[index] > maiorNumero){
      maiorNumero = numeros[index]
    }
  }
  for(let indexDois in numeros){
    if(numeros[indexDois] === maiorNumero){
      count += 1
    }
  }
  return count
}
console.log(highestCount([0, 0, 0]))

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
// Desafio 9
function encode(stringEncode) {
  
}
function decode() {
  // seu código aqui
}

// Desafio 10

function techList(nomeTech,nomeDaPessoa) {
  if(nomeTech.length === 0){
    return 'Vazio!'
  }
  let array = []
  nomeTech.sort()
    array.push ({
      tech: nomeTech[0] ,
      name: nomeDaPessoa 
    })
    array.push ({
      tech: nomeTech[1],
      name: nomeDaPessoa 
    })
    array.push ({
      tech: nomeTech[2],
      name: nomeDaPessoa 
    })
    array.push ({
      tech: nomeTech[3],
      name: nomeDaPessoa 
    })
    array.push ({
      tech: nomeTech[4],
      name: nomeDaPessoa 
    })
    return array
  }
  

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'))

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
