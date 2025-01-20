const readline = require('readline');

// Fixed conversion rate
const INR_TO_USD_RATE = 0.012; // 1 INR = 0.012 USD
const USD_TO_INR_RATE = 1 / INR_TO_USD_RATE; // 1 USD = ~83.33 INR

// Create a readline interface for user interaction
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Currency Converter: INR <=> USD\n");
console.log("1. Convert INR to USD");
console.log("2. Convert USD to INR");
console.log("3. Exit\n");

function mainMenu() {
    rl.question("Enter your choice (1/2/3): ", (choice) => {
        switch (choice) {
            case '1':
                convertINRToUSD();
                break;
            case '2':
                convertUSDToINR();
                break;
            case '3':
                console.log("Exiting... Goodbye!");
                rl.close();
                break;
            default:
                console.log("Invalid choice. Please try again.\n");
                mainMenu();
        }
    });
}

function convertINRToUSD() {
    rl.question("Enter amount in INR: ", (amount) => {
        const inr = parseFloat(amount);
        if (isNaN(inr) || inr < 0) {
            console.log("Invalid amount. Please enter a valid number.\n");
            return mainMenu();
        }
        const usd = (inr * INR_TO_USD_RATE).toFixed(2);
        console.log(`${inr} INR is approximately ${usd} USD.\n`);
        mainMenu();
    });
}

function convertUSDToINR() {
    rl.question("Enter amount in USD: ", (amount) => {
        const usd = parseFloat(amount);
        if (isNaN(usd) || usd < 0) {
            console.log("Invalid amount. Please enter a valid number.\n");
            return mainMenu();
        }
        const inr = (usd * USD_TO_INR_RATE).toFixed(2);
        console.log(`${usd} USD is approximately ${inr} INR.\n`);
        mainMenu();
    });
}

mainMenu();
