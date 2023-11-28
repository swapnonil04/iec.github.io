const stateUnitPrices = {
    maharashtra: 5.02,
    karnataka: 4.85,
    delhi: 6.18,
    gujarat: 5.15,
    westbengal: 5.25,
    tripura: 6.10,
    assam: 5.07,
    arunachalpradesh: 5.20,
    kerela: 5.05,
    tamilnadu: 5.00,
    odissa: 5.05,
    haryana: 5.15,
    uttarpradesh: 5.25,
    punjab: 5.07,
    bihar:6.94,
};

var payNowButton = document.getElementById("payNowButton");
payNowButton.disabled = true;

function sortDropdownAlphabetically() {
    var dropdown = document.getElementById("stateSelect");
    var options = Array.from(dropdown.options);

    options.sort(function (a, b) {
        return a.text.localeCompare(b.text);
    });

    dropdown.innerHTML = '';
    options.forEach(function (option) {
        dropdown.add(option);
    });

    updateUnitPrice();
}
const min = 500
const max = 600
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function updateUnitPrice() {
    var stateSelect = document.getElementById("stateSelect");
    var selectedState = stateSelect.value;

    var unitPrice = stateUnitPrices[selectedState];

    document.getElementById("result").setAttribute("data-unit-price", unitPrice);

    payNowButton.disabled = selectedState === "";

    document.getElementById("result").innerHTML = "";
}

function calculateCost() {
    var predefinedUnits = generateRandomNumber(min,max)
    var unitPrice = parseFloat(document.getElementById("result").getAttribute("data-unit-price"));

    if (isNaN(unitPrice)) {
        alert("Invalid unit price. Please check your configuration.");
        return;
    }

    var cost = predefinedUnits * unitPrice;
    document.getElementById("result").innerHTML = "Total Cost: ₹" + cost.toFixed(2);
    
    // Store the calculated cost in a session storage
    sessionStorage.setItem("calculatedCost", cost);
    payNowButton.disabled = false;
}


const randomUnitsElement = document.getElementById('randomUnits');

// Generate a random number
const randomValue = generateRandomNumber(min, max);

// Set the generated random number as the text content of the element
randomUnitsElement.textContent = randomValue;
