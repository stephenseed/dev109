function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
var valid = [];
var fieldNames = ['FirstName','Lastname','email','Phone','Username','Password','Address','City','State','Country','ZipCode','Comments'];
var answer = [];

for (var i=0; i < fieldNames.length; i++) {
  valid[i]=false;
  answer[i] = document.getElementById(fieldNames[i]).value;
}
    
//2) create variables to read the values from html text inputs
//----------------------------------------------------------------//
//3) do the validation

// First Name Validation
if (answer[0]==="null" || answer[0]==="" || answer[0].length > 20) {
    document.getElementById("FirstNameError").innerHTML = "<p style='color:red;'><b>The firstname is required and cannot be greater than 20 characters</b></p>";
}
else {
   document.getElementById("FirstNameError").innerHTML = "";
   valid[0] = true;
}
// Last Name Validation
  if (answer[1]==="null" || answer[1]==="" || answer[1].length > 50) {
    document.getElementById("LastnameError").innerHTML = "<p style='color:red;'><b>The lastname is required and cannot be greater than 20 characters</b></p>";
  }
  else {
   valid[1] = true;
   document.getElementById("LastnameError").innerHTML = "";
  }
  
// e-mail validation
var atpos = answer[2].indexOf("@");
var dotpos = answer[2].lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=answer[2].length) {
    document.getElementById("emailError").innerHTML = "<p style='color:red;'>"<p>Invalid e-mail address - must contain a . and @ sign.<p>";
}
else {
  valid[2] = true
  document.getElementById("emailError").innerHTML = "";
}
  
// Phone validation
if (isNaN(answer[3]) || answer[3].length >15 || answer[3]===null || answer[3]==="") {
  document.getElementById("PhoneError").innerHTML = "<p style='color:red;'>"<p>Invalid Phone Number or must be provided.</p>";
}
else {
  valid[3]=true;
  document.getElementById("PhoneError").innerHTML = "";
}

// Username validation
if (answer[4].length > 12 || answer[4]===null || answer[4]==="") {
  document.getElementById("UsernameError").innerHTML = "<p style='color:red;'>"<p>The username is required.</p>";
}
  else {
    valid[4]=true;
    document.getElementById("UsernameError").innerHTML = "";
  }

// Password Validation
  if (answer[5].length < 7 || answer[5]===null || answer[5]==="") {
  document.getElementById("PasswordError").innerHTML = "<p style='color:red;'>"<p>The password is required.</p>";
}
  else {
    valid[5]=true;
    document.getElementById("PasswordError").innerHTML = "";
  }

// Address validation
  if (answer[6]===null || answer[6]==="") {
  document.getElementById("AddressError").innerHTML = "<p style='color:red;'>"<p>The address is required.</p>";
}
  else {
    valid[6]=true;
    document.getElementById("AddressError").innerHTML = "";
  }

// City Validation
  if (answer[7]===null || answer[7]==="") {
  document.getElementById("CityError").innerHTML = "<p style='color:red;'>"<p>The city is required.</p>";
}
  else {
    valid[7]=true;
    document.getElementById("CityError").innerHTML = "";
  }

// State Validation
  if (answer[8]===null || answer[8]==="") {
  document.getElementById("StateError").innerHTML = "<p style='color:red;'>"<p>The state is required.</p>";
}
  else {
    valid[8]=true;
    document.getElementById("StateError").innerHTML = "";
  }

// Country Validation
  if (answer[9]===null || answer[9]==="") {
  document.getElementById("CountryError").innerHTML = "<p style='color:red;'>"<p>The Country is required.</p>";
}
  else {
    valid[9]=true;
    document.getElementById("CountryError").innerHTML = "";
  }

// Zip Code Validation
  if (answer[9]==="USA") {
    if (answer[10].length >5 || answer[10]===null || answer[10]==="") {
    document.getElementById("ZipCodeError").innerHTML = "<p style='color:red;'>"<p>The zipcode is required.</p>";
    }
    else {
      valid[10]=true;
      document.getElementById("ZipCodeError").innerHTML = "";
    }
  }
  else {
    valid[10]=true;
    document.getElementById("ZipCodeError").innerHTML = "";
  }
  
// Comment Validation is NOT required.
  valid[11] = true;
  
//--------------------------------------------------------------------------------------//
//4) send error messages 

// First Name
document.getElementById("errorMessages").innerHTML = errorMessages;
  
//5) return the status of each field

}
