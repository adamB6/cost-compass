function calculateInsurance(rate, type, divId) {
    let output = `<table><tr><th>Miles</th><th>${type} Insurance</th></tr>`;
    for (let miles = 100; miles <= 2000; miles += 50) {
        let cost = (rate / 100) * miles;
        output += `<tr><td>${miles}</td><td>$${cost.toFixed(2)}</td></tr>`;
    }
    output += '</table>';
    document.getElementById(divId).innerHTML = output;

    // Clear the other table
    let otherDivId = type === 'Regular' ? 'premiumInsuranceDiv' : 'regularInsuranceDiv';
    document.getElementById(otherDivId).innerHTML = '';
}

function calculateCost() {
    var costPerGallon = parseFloat(document.getElementById('costPerGallon').value);
    var milesPerGallon = parseFloat(document.getElementById('milesPerGallon').value);
    var miles = parseFloat(document.getElementById('miles').value);
    var outputDiv = document.getElementById('output');

    if (isNaN(costPerGallon) || isNaN(milesPerGallon) || isNaN(miles)) {
        outputDiv.innerHTML = "Please fill in all values.";
    } else {
        var totalCost = (miles / milesPerGallon) * costPerGallon;
        outputDiv.innerHTML = "Total Cost of the Trip: $" + totalCost.toFixed(2);
    }
}
