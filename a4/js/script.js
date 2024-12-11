function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
var valid = [];
var fieldNames = ['FirstName','Lastname','email','Phone','Username','Password','Address','City','State','Country','ZipCode','Comments'];
var answer = [];
var errorMessage;
for (var i=0; i < fieldNames.length; i++) {
  valid[i]=false;
  answer[i] = document.getElementById(fieldNames[i]).value;
}
  console.log(answer);
    
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
var dotpos = uanswer[2].lastIndexOf(".");
if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
    errorMessage += "<p>Invalid e-mail address - must contain a . and @ sign.<p>";
}
else {
  valid[2] = true
}

  
//--------------------------------------------------------------------------------------//
//4) send error messages 

// First Name
document.getElementById("errorMessages").innerHTML = errorMessages;
  
//5) return the status of each field

}
