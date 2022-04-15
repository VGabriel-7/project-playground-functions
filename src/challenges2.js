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

// Desafio 12
function triangleCheck() {
  // seu código aqui
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
