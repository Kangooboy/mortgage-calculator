const editBankForm = document.querySelector('.edit-bank');
const calculator = document.querySelector('.calculator').cloneNode(true);
const header = document.querySelector('.page-header');
const calculatorContainer = document.querySelector('.calculator-container');
const editContainer = document.querySelector('.edit-bank-container');
const editButton = document.querySelector('button[name = edit]');
const calculatorButton = document.querySelector('button[name = calculator]');

const fragment = document.createDocumentFragment();
const interestRate = document.querySelector('.rate');
const maxLoan = document.querySelector('.maxloan');
const minPayment = document.querySelector('.minpayment');
const loanTerm = document.querySelector('.term');
const updateButton = document.querySelector('input[name = update]');
const deleteButton = document.querySelector('input[name = delete]');
const calculateButton = document.querySelector('input[name = calculate]');
const bankListEdit = document.querySelector('#banks');
const bankName = document.querySelector('#bank');
const bank = document.querySelector('.bank-name');
const editForm = document.querySelector('.form');
const calculatorForm = document.querySelector('.calculator-form');
const initialLoan = document.querySelector('.initial-loan');
const downPayment = document.querySelector('.down-payment');
const monthlyMortgage = document.querySelector('#monthly-mortgage');
const mortgageContainer = document.querySelector('.monthly-mortgage');

const GET_BANKS = [
  {name: 'Alfa', rate: 10, maxloan: 300000, minpayment: 0.2, term: 36},
  {name: 'Beta', rate: 20, maxloan: 400000, minpayment: 0.3, term: 24},
  {name: 'Zen', rate: 30, maxloan: 500000, minpayment: 0.4, term: 12},
];

const banks = JSON.parse(localStorage.getItem('banks')) || GET_BANKS;

editButton.addEventListener('click', () => {
  calculatorContainer.classList.add('hidden');
  editContainer.classList.remove('hidden');
})

calculatorButton.addEventListener('click', () => {
  editContainer.classList.add('hidden');
  calculatorContainer.classList.remove('hidden');
})

const getBanks = () => {
  localStorage.setItem('banks', JSON.stringify(banks));
};

function renderBanks() {
  banks.forEach((item) => {
    const element = document.createElement('option');
    element.setAttribute('value', item.name);
    element.textContent = item.name;
    fragment.append(element);
  });
  bankListEdit.append(fragment);
}

bank.addEventListener('change', (evt) => {
  banks.forEach((item) => {
    if(evt.target.value === item.name) {
      setValue(item);
    }
  })
});

function setValue(item) {
  bankName.value = item.name;
  interestRate.value = item.rate;
  maxLoan.value = item.maxloan;
  minPayment.value = item.maxloan * item.minpayment;
  loanTerm.value = item.term;
}

function updateValue(evt) {
  evt.preventDefault();
  for (let i = 0; i < banks.length; i++) {
    if(banks[i].name === bankName.value) {
      banks[i].rate = Number(interestRate.value);
      banks[i].maxloan = Number(maxLoan.value); 
      banks[i].minpayment = minPayment.value / maxLoan.value;
      banks[i].term = Number(loanTerm.value);
      banks.splice(i, 1, banks[i]);
    }
  } 
  if(!banks.some((el) => el.name === bankName.value)) {
    const newBank = {
      name: bankName.value, 
      rate: Number(interestRate.value), 
      maxloan: Number(maxLoan.value), 
      minpayment: minPayment.value / maxLoan.value, 
      term: Number(loanTerm.value)
    };
    banks.push(newBank);
  } 
  getBanks();
  bankListEdit.innerHTML = '';
  bank.value = '';
  renderBanks();
  this.reset();
}

editForm.addEventListener('submit', updateValue);

deleteButton.addEventListener('click', () => {
  banks.forEach((item, i) => {
    if(bankName.value === item.name) { 
      banks.splice(i, 1);
      bankListEdit.removeChild(bankListEdit.children[i]);
      bank.value = '';
      getBanks();
    }
  })
})

const calculateMonthlyMortgage = (evt) => {
  evt.preventDefault();
  const loan = Number(initialLoan.value);
  const term = Number(loanTerm.value);
  const payment = Number(downPayment.value);
  let rate = Number(interestRate.value);
  rate = (rate / 12) / 100;
  let mortgageAmount = ((loan - payment) * ((rate * Math.pow((1 + rate), term)) / (Math.pow((1 + rate), term) - 1)));
  if (loan > Number(maxLoan.value) || payment > Number(maxLoan.value)) {
    const error = document.createElement('div');
    error.textContent = 'choose another bank';
    error.style.color = '#FF0000';
    mortgageContainer.after(error);
    calculateButton.disabled = true;
    setTimeout(() => {
      initialLoan.value = '';
      downPayment.value = '';
      error.remove();
      calculateButton.disabled = false;
    }, 2200);
    return
  }
  return monthlyMortgage.value = mortgageAmount.toFixed(2);
}

calculatorForm.addEventListener('submit', calculateMonthlyMortgage);

getBanks();
renderBanks();
