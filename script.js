function calculateResults() {
    // Get user inputs
    const netIncome = parseFloat(document.getElementById('netIncome').value);
    const incomeFrequency = document.getElementById('incomeFrequency').value;
    const otherIncome = parseFloat(document.getElementById('otherIncome').value);
    const otherIncomeFrequency = document.getElementById('otherIncomeFrequency').value;

    // Perform calculations
    const totalIncome = calculateAverageIncome(netIncome, incomeFrequency, otherIncome, otherIncomeFrequency);

    // Display results
    const output = document.getElementById('output');
    output.innerHTML = `
        <h2>Summary of your Finances</h2>
        <p>Average Monthly Income: £${totalIncome.toFixed(2)}</p>
        <!-- Add more summary details here -->
    `;
}

// Function to calculate average monthly income
function calculateAverageIncome(netIncome, incomeFrequency, otherIncome, otherIncomeFrequency) {
    let totalIncome = netIncome;
    if (incomeFrequency === 'biweekly') {
        totalIncome *= 2;
    } else if (incomeFrequency === 'weekly') {
        totalIncome *= 4;
    }
    totalIncome += otherIncome;
    if (otherIncomeFrequency === 'biweekly') {
        totalIncome *= 2;
    } else if (otherIncomeFrequency === 'weekly') {
        totalIncome *= 4;
    }
    return totalIncome / 12; // Convert to average monthly income
}
