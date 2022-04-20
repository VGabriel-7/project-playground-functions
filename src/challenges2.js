// Função retorna True caso um número apareça 3 ou mais vezes no array
// eslint-disable-next-line sonarjs/cognitive-complexity
function numberCount(array) {
  for (let index of array) {
    let counter = 0;
    for (let index2 of array) {
      if (index === index2) {
        counter += 1;
      }
    }
    if (counter > 2) {
      return true;
    }
  }
}

// Função retorna True caso um dos números do array seja < 0 ou > 9
function invalidNumber(array) {
  // let contador;
  for (let index of array) {
    if (index > 9 || index < 0) {
      return true;
    }
  }
}

// Desafio 11
function generatePhoneNumber(nums) {
  const repeatedNumber = numberCount(nums);
  const testNumber = invalidNumber(nums);
  if (nums.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (repeatedNumber === true || testNumber === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${nums[0]}${nums[1]}) ${nums[2]}${nums[3]}${nums[4]}${nums[5]}${nums[6]}-${nums[7]}${nums[8]}${nums[9]}${nums[10]}`;
}

// Retorna True caso cada lado seja menor que a soma dos outros dois lados
function sumSides(sideA, sideB, sideC) {
  const line1 = sideB + sideC;
  const line2 = sideA + sideC;
  const line3 = sideA + sideB;
  if (sideA < line1 && sideB < line2 && sideC < line3) {
    return true;
  }
}

// Retornar True caso cada valor seja maior que o valor absoluto da diferença entre os dois dois valores
function absoluteValue(valueA, valueB, valueC) {
  const value = Math.abs(valueB - valueC); // Explicação da função Math.abs() no site https://www.w3schools.com/jsref/jsref_abs.asp
  const value2 = Math.abs(valueA - valueC); // https://www.w3schools.com/jsref/jsref_abs.asp
  const value3 = Math.abs(valueA - valueB); // https://www.w3schools.com/jsref/jsref_abs.asp
  if (valueA > value && valueB > value2 && valueC > value3) {
    return true;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let testSides = sumSides(lineA, lineB, lineC);
  let testValue = absoluteValue(lineA, lineB, lineC);
  if (testSides === true && testValue === true) {
    return true;
  }
  return false;
}

// Convert e soma os números de uma string
function convertToNumber(string) {
  let arrayNum = string.match(/[0-9]/g); // Como retirar apenas os números de uma string referência https://www.w3schools.com/jsref/jsref_regexp_0-9.asp
  let counter = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    let convert = Number(arrayNum[index]); // Como converter uma string em número referência https://www.w3schools.com/jsref/jsref_number.asp
    counter += convert;
  }
  return counter;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  const sum = convertToNumber(string);
  if (sum === 1) {
    return '1 copo de água';
  }
  if (sum > 1) {
    return `${sum} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
