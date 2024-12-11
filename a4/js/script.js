function validateForm(){
//1) create a variable to control status of each field. Assume that they are not valid
var valid = [];
var fieldNames = ['FirstName','Lastnname','email','Phone','Username','Password','Address','City','State','Country','ZipCode','Comments'];
var answer = [];
for (var i=0; i < fieldNames.length; i++) {
  valid[i]=false;
  answer[i] = document.getElementById(fieldNames[i]);
}
  console.show(answer);
    
//2) create variables to read the values from html text inputs

//3) do the validation

//4) send error messages 

//5) return the status of each field

}
