// Desafio 11
function generatePhoneNumber(number) {
  let tel = []
  if(number.length > 10){
    return 'Array com tamanho incorreto.'
  }
  for(let key in number){
    if(number[key] > 9)
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
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
