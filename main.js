function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var bmi = weight / Math.pow(height, 2);
    var message = "";

    if (bmi < 18.5) {
        message = "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        message = "You have a normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        message = "You are overweight.";
    } else {
        message = "You are obese.";
    }

    var bmiRound = Math.round(bmi); 
    window.alert("Your BMI is " + bmiRound + ". " + message);
}
