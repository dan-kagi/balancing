const questions = [
  {
    id: 1,
    substances: [
      {
        reagents: [
          { name: 'ethanol', formula: 'C2H6O', coef: 1 },
          { name: 'oxygen', formula: 'O2', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 2 },
          { name: 'water', formula: 'H2O', coef: 3 },
        ],
      },
    ],
    coefs: [1, 3, 2, 3],
  },
  {
    id: 2,
    substances: [
      {
        reagents: [{ name: 'hydrogenPeroxide', formula: 'H2O2', coef: 2 }],
      },
      {
        products: [
          { name: 'molecularOxygen', formula: 'O2', coef: 1 },
          { name: 'water', formula: 'H2O', coef: 2 },
        ],
      },
    ],
    coefs: [2, 1, 2],
  },
  {
    id: 3,
    substances: [
      {
        reagents: [
          { name: 'magnesium', formula: 'Mg', coef: 1 },
          { name: 'hydrochloricAcid', formula: 'HCl', coef: 2 },
        ],
      },
      {
        products: [
          { name: 'magnesiumChloride', formula: 'MgCl2', coef: 1 },
          { name: 'hydrogen', formula: 'H2', coef: 1 },
        ],
      },
    ],
    coefs: [1, 2, 1, 1],
  },
  {
    id: 4,
    substances: [
      {
        reagents: [
          { name: 'aluminumOxide', formula: 'Al2O3', coef: 1 },
          { name: 'hydrochloricAcid', formula: 'HCl', coef: 6 },
        ],
      },
      {
        products: [
          { name: 'aluminumChloride', formula: 'AlCl3', coef: 2 },
          { name: 'water', formula: 'H2O', coef: 3 },
        ],
      },
    ],
    coefs: [1, 6, 2, 3],
  },
  {
    id: 5,
    substances: [
      {
        reagents: [
          { name: 'sodium', formula: 'Na(s)', coef: 2 },
          { name: 'water', formula: 'H2O(l)', coef: 2 },
        ],
      },
      {
        products: [
          { name: 'sodiumHidroxide', formula: 'NaOH(aq)', coef: 2 },
          { name: 'molecularHydrogen', formula: 'H2(g)', coef: 1 },
        ],
      },
    ],
    coefs: [2, 2, 2, 1],
  },
  {
    id: 6,
    substances: [
      {
        reagents: [
          { name: 'ferricOxide', formula: 'Fe2O3(s)', coef: 1 },
          { name: 'sulfurTrioxide', formula: 'SO3(g)', coef: 3 },
        ],
      },
      {
        products: [
          { name: 'ferricSulphate', formula: 'Fe2(SO4)3(s)', coef: 1 },
        ],
      },
    ],
    coefs: [1, 3, 1],
  },
  {
    id: 7,
    substances: [
      {
        reagents: [
          { name: 'leadTwoChloride', formula: 'PbCl2', coef: 3 },
          { name: 'aluminiumSulphate', formula: 'Al2(SO4)3', coef: 1 },
        ],
      },
      {
        products: [
          { name: 'leadTwoSulphate', formula: 'PbSO4', coef: 3 },
          { name: 'aluminiumChloride', formula: 'AlCl3', coef: 2 },
        ],
      },
    ],
    coefs: [3, 1, 3, 2],
  },
  {
    id: 8,
    substances: [
      {
        reagents: [
          { name: 'nitricAcid', formula: 'HNO3', coef: 2 },
          { name: 'calciumHidroxide', formula: 'Ca(OH)2', coef: 1 },
        ],
      },
      {
        products: [
          { name: 'water', formula: 'H2O', coef: 2 },
          { name: 'calciumNitrate', formula: 'Ca(NO3)2', coef: 1 },
        ],
      },
    ],
    coefs: [2, 1, 2, 1],
  },
  {
    id: 9,
    substances: [
      {
        reagents: [
          { name: 'benzene', formula: 'C6H6(l)', coef: 2 },
          { name: 'oxygen', formula: 'O2(g)', coef: 15 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2(g)', coef: 12 },
          { name: 'water', formula: 'H2O(l)', coef: 6 },
        ],
      },
    ],
    coefs: [2, 15, 12, 6],
  },
  {
    id: 10,
    substances: [
      {
        reagents: [
          { name: 'ethane', formula: 'C2H6', coef: 2 },
          { name: 'oxygen', formula: 'O2', coef: 7 },
        ],
      },
      {
        products: [
          { name: 'carbonDioxide', formula: 'CO2', coef: 4 },
          { name: 'water', formula: 'H2O', coef: 6 },
        ],
      },
    ],
    coefs: [2, 7, 4, 6],
  },
];

function createCard(question) {
  const card = document.createElement('div');
  card.setAttribute('class', 'card');
  card.setAttribute('id', question.id);
  const form = document.createElement('form');
  const amountOfReagents = question.substances[0].reagents.length;
  const firstLabel = document.createElement('label');
  firstLabel.innerHTML = question.id + ' - ';
  form.appendChild(firstLabel);
  for (let i = 0; i < amountOfReagents; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('name', question.substances[0].reagents[i].name);
    label.setAttribute('name', question.substances[0].reagents[i].name);
    if (i === amountOfReagents - 1) {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) +
        ' ' +
        '&rarr;' +
        ' ';
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[0].reagents[i].formula) + ' + ';
    }
    form.appendChild(input);
    form.appendChild(label);
  }
  const amountOfProducts = question.substances[1].products.length;
  for (let i = 0; i < amountOfProducts; i++) {
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.setAttribute('name', question.substances[1].products[i].name);
    label.setAttribute('name', question.substances[1].products[i].name);
    if (i === amountOfProducts - 1) {
      label.innerHTML = changeToSubscript(
        question.substances[1].products[i].formula
      );
    } else {
      label.innerHTML =
        changeToSubscript(question.substances[1].products[i].formula) + ' + ';
    }
    form.appendChild(input);
    form.appendChild(label);
  }
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  button.textContent = 'Checar Resposta';
  button.addEventListener('click', (event) => {
    const card = document.getElementById(`${question.id}`);
    const inputs = card.querySelectorAll('input');
    let insertedCoefs = [];
    for (let input of inputs) {
      insertedCoefs.push(input.value);
    }
    if (validateCoefs(insertedCoefs)) {
      const check = checkCoefs(insertedCoefs, question.coefs);
      if (check) {
        alert(`Q${question.id} - ` + check);
      } else {
        alert(`Q${question.id} - ` + 'Resposta errada. Tente novamente.');
      }
    } else {
      alert(
        `Q${question.id} - ` + 'Coeficientes Estequiométricos Inválidos !!'
      );
    }
    event.preventDefault();
  });
  buttonDiv.appendChild(button);
  form.appendChild(buttonDiv);
  card.appendChild(form);
  return card;
}

for (let question of questions) {
  const card = createCard(question);
  document.querySelector('main').appendChild(card);
}

document.querySelector(
  'footer'
).innerHTML = `<p>Copyright &copy; Danilo Morais Itokagi. All rights reserved. ${new Date().getFullYear()}</p>`;

function changeToSubscript(word) {
  const arrWord = [...word];
  newWord = '';
  for (let i = 0; i < arrWord.length; i++) {
    if (isNaN(arrWord[i]) === false) {
      newWord += '<sub>';
      newWord += arrWord[i];
      newWord += '</sub>';
    } else {
      newWord += arrWord[i];
    }
  }
  return newWord;
}

function convertToEnglish(floatNumber) {
  if (floatNumber.includes(',')) {
    floatNumber = floatNumber.replace(',', '.');
  }
  const number = Number(floatNumber);
  if (isNaN(number)) {
    return false;
  }
  return number;
}

function validateCoefs(coeficients) {
  let isValid = true;
  for (let coef of coeficients) {
    if (
      isNaN(coef) ||
      !coef ||
      Number(coef) <= 0 ||
      !Number.isInteger(Number(coef))
    ) {
      isValid = false;
      return isValid;
    }
  }
  return isValid;
}

function checkCoefs(insertedCoefs, correctCoefs) {
  const size = correctCoefs.length;
  let msg = 'Parabéns, coeficientes ' + insertedCoefs[0];
  let ratio = Number(insertedCoefs[0]) / correctCoefs[0];
  for (let i = 1; i < size; i++) {
    msg += ' ' + insertedCoefs[i];
    let newRatio = Number(insertedCoefs[i]) / correctCoefs[i];
    if (newRatio !== ratio) {
      return false;
    }
  }
  msg += ' estão corretos.';
  return msg;
}
