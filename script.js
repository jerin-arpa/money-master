let totalExpense = 0;
let total = 0;
let savings = 0;
let remainingTotalBalance = 0;

function getIncomeExpensesAmounts(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountString = inputAmount.value;
    const inputValue = parseFloat(inputAmountString);
    return inputValue;
}

function displayValue(idName, value) {
    const tag = document.getElementById(idName);
    tag.innerText = value;
}

function incomePart() {
    const totalIncome = getIncomeExpensesAmounts('incomeAmount');
    const expenseForFood = getIncomeExpensesAmounts('foodAmount');
    const expenseForRent = getIncomeExpensesAmounts('rentAmount');
    const expenseForCloths = getIncomeExpensesAmounts('clothsAmount');
    totalExpense = expenseForFood + expenseForRent + expenseForCloths;
    displayValue('totalExpenses', totalExpense.toFixed(2));
    total = totalIncome - totalExpense;
    displayValue('totalBalance', total.toFixed(2));
}


function savingsPart() {
    incomePart();
    const giveSavingsAmount = getIncomeExpensesAmounts('savingsAmount');
    savings = giveSavingsAmount * totalExpense / 100;
    displayValue('savingAmount', savings.toFixed(2));
    remainingTotalBalance = total + savings;
    displayValue('remainingBalance', remainingTotalBalance.toFixed(2));
}


function emptyValue() {
    totalExpense = 0;
    total = 0;
    savings = 0;
    remainingTotalBalance = 0;
}


function emptyInputValue() {
    document.getElementById('incomeAmount').value = '';
    document.getElementById('foodAmount').value = '';
    document.getElementById('rentAmount').value = '';
    document.getElementById('clothsAmount').value = '';
    document.getElementById('savingsAmount').value = '';
}

function emptyTextValue() {
    displayValue('totalExpenses', totalExpense.toFixed(2));
    displayValue('totalBalance', total.toFixed(2));
    displayValue('savingAmount', savings.toFixed(2));
    displayValue('remainingBalance', remainingTotalBalance.toFixed(2));
}


const calculateBtn = document.getElementById('calculateBtn').addEventListener('click', function () {
    incomePart();
    emptyValue();
    emptyTextValue();
});


const savingsBtn = document.getElementById('savingsBtn').addEventListener('click', function () {
    savingsPart();
    emptyValue();
    emptyTextValue();
});


const resetBtn = document.getElementById('resetBtn').addEventListener('click', function () {
    emptyValue();
    emptyInputValue();
    emptyTextValue();
});
