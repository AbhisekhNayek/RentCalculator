function calculateRent() {
    var rent = parseInt(document.getElementById("rent").value) || 0;
    var food = parseInt(document.getElementById("food").value) || 0;
    var electricitySpend = parseInt(document.getElementById("electricitySpend").value) || 0;
    var chargePerUnit = parseInt(document.getElementById("chargePerUnit").value) || 0;
    var persons = parseInt(document.getElementById("persons").value) || 1;

    var totalBill = electricitySpend * chargePerUnit;
    var totalAmount = food + rent + totalBill;
    var output = totalAmount / persons;

    document.getElementById("result").innerHTML = "Each person will pay: Rs. " + output.toFixed(2);
}
