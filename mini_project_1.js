function checkBudget() {

    let budget = parseFloat(prompt("Enter your budget amount (birr):"));
    let price = parseFloat(prompt("Enter the item price (birr):"));
    let savings = parseFloat(prompt("Enter your savings (birr):"));

    let totalMoney = budget + savings;

    if (totalMoney >= price) {
        alert("You can afford it");
    } else {
        alert("You cannot afford it.");
    }
}