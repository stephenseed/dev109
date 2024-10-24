alert("Welcome User");
var message;
var weight = prompt("Please enter your weight in KG:");
var height = prompt("Please enter you height in meters:");
var age = prompt("Please enter your age in years:");
var BMI = weight / (height * height);
if (BMI >= 19 && BMI < 25) { console.log("Your weight is normal");
} else if (BMI >= 25 && BMI < 30) { console.log("You are overweight.");
} else if (BMI >= 30 && BMI < 35) { console.log("You are Obese Level 1.");
} else if (BMI >= 35 && BMI < 40) { console.log("You are obese level 2.");
} else if (BMI >= 40) { console.log("You are obese Level 3.");
} else { console.log("You are underweight.");
}
document.write('<h3>' + "Done" + '</h3>');
