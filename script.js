function calculateResults() {
    // Get user inputs
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const carLoans = parseFloat(document.getElementById('carLoans').value);
    const creditCardMin = parseFloat(document.getElementById('creditCardMin').value);
    const studentLoans = parseFloat(document.getElementById('studentLoans').value);
    const propertyTax = parseFloat(document.getElementById('propertyTax').value);
    const homeInsurance = parseFloat(document.getElementById('homeInsurance').value);
    const pmi = parseFloat(document.getElementById('pmi').value);
    const hoaFees = parseFloat(document.getElementById('hoaFees').value);
    const availableFunds = parseFloat(document.getElementById('availableFunds').value);
    const mortgageTerm = parseFloat(document.getElementById('mortgageTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const depreciablePercent = parseFloat(document.getElementById('depreciablePercent').value);
    const depreciationYears = parseFloat(document.getElementById('depreciationYears').value);

    // Perform calculations
    // Example calculation: Simple addition (You can add more complex calculations)
    const totalDebts = carLoans + creditCardMin + studentLoans;
    const monthlyExpenses = propertyTax + homeInsurance + pmi + hoaFees;
    const loanAmount = calculateLoanAmount(annualIncome, mortgageTerm, interestRate);
    const downPayment = availableFunds - loanAmount;
    const depreciationAmount = calculateDepreciation(loanAmount, depreciablePercent, depreciationYears);

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Calculated Results</h2>
        <p>Total Monthly Debts: £${totalDebts}</p>
        <p>Total Monthly Housing Expenses: £${monthlyExpenses}</p>
        <p>Loan Amount: £${loanAmount}</p>
        <p>Down Payment: £${downPayment}</p>
        <p>Depreciation Amount: £${depreciationAmount}</p>
    `;
}

// Function to calculate loan amount
function calculateLoanAmount(income, term, rate) {
    // Example calculation: Simple multiplication (You can adjust this based on your requirements)
    return (income * 0.3 * term) / (rate * 0.01 * 12);
}

// Function to calculate depreciation amount
function calculateDepreciation(loanAmount, percent, years) {
    // Example calculation: Simple multiplication (You can adjust this based on your requirements)
    return (loanAmount * (percent / 100)) / years;
}
