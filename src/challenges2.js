// Desafio 11
function generatePhoneNumber(number) {
  let tel = []
  let count = 0
  if(number.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for(let key in number){
    if(number[key] > 9  || number[key] < 0){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  for (let index in number){
    let checaNumero = number[index]
      for(let index2 in number){
        if(checaNumero === number[index2]){
          count += 1
        }
      }
      if(count >= 3){
        return 'não é possível gerar um número de telefone com esses valores'
      }
      count = 0
  }
    tel.push('(');
    tel.push(number[0])
    tel.push(number[1])
    tel.push(')')
    tel.push(' ')
    tel.push(number[2])
    tel.push(number[3])
    tel.push(number[4])
    tel.push(number[5])
    tel.push(number[6])
    tel.push('-')
    tel.push(number[7])
    tel.push(number[8])
    tel.push(number[9])
    tel.push(number[10])

  return tel.join('')
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  else return false;
}

// Desafio 13
function hydrate(texto) {
  let numbers = []
  for(index in texto){
  
  if (parseInt(texto[index]) !== NaN){
    numbers.push(texto[index])
  }
  }
  // console.log(numbers)
}
// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'))
co
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
