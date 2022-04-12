// Desafio 1
function compareTrue(bolean, secondBolean) {
  if (bolean === true && secondBolean === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let reverseName = `${array[array.length - 1]}, ${array[0]}`; // template mostrado pelo Eslint https://eslint.org/docs/rules/prefer-template
  return reverseName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  return vitorias + empates;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
function bigValue(array) {
  let comparador = 0;

  for (let index = 0; index < array.length; index += 1) {
    comparador = array[index];
    for (let num = 1; num < array.length; num += 1) {
      let comparado = array[num];
      if (comparador < comparado) {
        comparador = comparado;
      }
    }
  }
  return comparador;
}

// Desafio 6
function highestCount(maiorValor) {
  let valor = bigValue(maiorValor);
  let contador = null;
  for (let index in maiorValor) {
    if (valor === maiorValor[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
