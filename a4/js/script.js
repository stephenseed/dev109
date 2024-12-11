function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
var valid = [];
var fieldNames = ['FirstName','Lastname','email','Phone','Username','Password','Address','City','State','Country','ZipCode','Comments'];
var answer = [];
var errorMessages = "";

for (var i=0; i < fieldNames.length; i++) {
  valid[i]=false;
  answer[i] = document.getElementById(fieldNames[i]).value;
}
    
//2) create variables to read the values from html text inputs
//----------------------------------------------------------------//
//3) do the validation

// First Name Validation
if (answer[0]==="null" || answer[0]==="" || answer[0].length > 20) {
    errorMessages += "<p>The firstname is required and cannot be greater than 20 characters</p>";
}
else {
   valid[0] = true;
}
// Last Name Validation
  if (answer[1]==="null" || answer[1]==="" || answer[1].length > 50) {
    errorMessages += "<p>The lastname is required and cannot be greater than 50 characters</p>";
  }
else {
   valid[1] = true;
}
  
// e-mail validation
var atpos = answer[2].indexOf("@");
var dotpos = answer[2].lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=answer[2].length) {
    errorMessage += "<p>Invalid e-mail address - must contain a . and @ sign.<p>";
}
else {
  valid[2] = true
}
  
// Phone validation
if (isNaN(answer[3]) || answer[3].length >15 || answer[3]===null || answer[3]==="") {
  errorMessages += "<p>Invalid Phone Number or must be provided.</p>";
}
else {
  valid[3]=true;
}

// Username validation
if (answer[4].length > 12 || answer[4]===null || answer[4]==="") {
  errorMessages += "<p>The username is required.</p>";
}
  else {
    valid[4]=true;
  }

// Password Validation
  if (answer[5].length < 7 || answer[5]===null || answer[5]==="") {
  errorMessages += "<p>The password is required.</p>";
}
  else {
    valid[5]=true;
  }

// Address validation
  if (answer[6]===null || answer[6]==="") {
  errorMessages += "<p>The address is required.</p>";
}
  else {
    valid[6]=true;
  }

// City Validation
  if (answer[7]===null || answer[7]==="") {
  errorMessages += "<p>The city is required.</p>";
}
  else {
    valid[7]=true;
  }

// State Validation
  if (answer[8]===null || answer[8]==="") {
  errorMessages += "<p>The state is required.</p>";
}
  else {
    valid[8]=true;
  }

// Country Validation
  if (answer[9]===null || answer[9]==="") {
  errorMessages += "<p>The Country is required.</p>";
}
  else {
    valid[9]=true;
  }

// Zip Code Validation
  if (answer[9]==="USA") {
    if (answer[10].length >5 || answer[10]===null || answer[10]==="") {
    errorMessages += "<p>The zipcode is required.</p>";
    }
    else {
      valid[10]=true;
    }
  }
  else {
    valid[10]=true;
  }
  
// Comment Validation is NOT required.
  valid[11] = true;
  
//--------------------------------------------------------------------------------------//
//4) send error messages 

// First Name
document.getElementById("errorMessages").innerHTML = errorMessages;
  
//5) return the status of each field

}
