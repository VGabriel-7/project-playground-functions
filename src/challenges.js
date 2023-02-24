// Desafio 1
const compareTrue = (bolean, secondBolean) => bolean && secondBolean;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => string.split(' ');

// Desafio 4
const concatName = (array) => `${array[array.length - 1]}, ${array[0]}`; // template mostrado pelo Eslint https://eslint.org/docs/rules/prefer-template

// Desafio 5
const footballPoints = (wins, ties) => wins * 3 + ties;

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

function negativePositive(num) {
  let positivo;
  if (num < 0) {
    return num *= -1;
  }
  return num;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = mouse - cat1;
  let positionCat2 = mouse - cat2;
  positionCat1 = negativePositive(positionCat1);
  positionCat2 = negativePositive(positionCat2);
  if (positionCat1 > positionCat2) {
    return 'cat2';
  } if (positionCat2 > positionCat1) {
    return 'cat1';
  } if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(array) {
  let arrayBuzz = [];
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayBuzz.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      arrayBuzz.push('buzz');
    } else if (array[index] % 3 === 0) {
      arrayBuzz.push('fizz');
    } else if (array[index] % 3 !== 0 && array[index] % 5 !== 0) {
      arrayBuzz.push('bug!');
    }
  }
  return arrayBuzz;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let newString = '';
  for (let index of string) {
    if (index === 'a') {
      newString += '1';
    } else if (index === 'e') {
      newString += '2';
    } else if (index === 'i') {
      newString += '3';
    } else if (index === 'o') {
      newString += '4';
    } else if (index === 'u') {
      newString += '5';
    } else {
      newString += index;
    }
  }
  return newString;
}
// eslint-disable-next-line complexity
function decode(string) {
  let newString = '';
  for (let index of string) {
    if (index === '1') {
      newString += 'a';
    } else if (index === '2') {
      newString += 'e';
    } else if (index === '3') {
      newString += 'i';
    } else if (index === '4') {
      newString += 'o';
    } else if (index === '5') {
      newString += 'u';
    } else {
      newString += index;
    }
  }
  return newString;
}

// Desafio 10
function techList(arrayTech, nome) {
  // eslint-disable-next-line sonarjs/no-unused-collection
  arrayTech.sort(); // explicação sobre a função sort() visto no  https://www.w3schools.com/js/js_array_sort.asp
  let arrayObjetos = [];
  // eslint-disable-next-line guard-for-in
  for (let index in arrayTech) {
    arrayObjetos.push({
      tech: arrayTech[index],
      name: nome,
    });
  }
  if (arrayObjetos.length === 0) {
    return 'Vazio!';
  }
  return arrayObjetos;
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
