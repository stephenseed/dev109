alert("Welcome User");
var message;
var weight = prompt("Please enter your weight in KG:");
var height = prompt("Please enter you height in meters:");
var age = prompt("Please enter your age in years:");
var MBI = weight / (height * height);
switch(BMI) {
  case (BMI>=19 && BMI<25):
    console.log("Your weight is normal");
    break;
  Case (BMI >=25 && BMI<30):
    console.log("You are overweight.");
    Break;
  Case (BMI >=30 && BMI<35):
    console.log("You are Obese Level 1.");   
    break;
  Case (BMI >=35 && BMI<40):
    console.log("You are obese level 2.");
    break;
  Case (BMI >=40):
    console.log("You are obese Level 3.");
    break;
  default:
    console.log("You are underweight.");
}
document.write('<h3>' + "Done" + '</h3>');
