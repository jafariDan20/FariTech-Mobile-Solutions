document.getElementById("myForm").addEventListener("submit", function(e){

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;
let error = document.getElementById("error");

if(name.length < 3){
error.innerText = "Name too short";
e.preventDefault();
return;
}

if(!email.includes("@")){
error.innerText = "Invalid email";
e.preventDefault();
return;
}

if(phone.length < 7){
error.innerText = "Invalid phone number";
e.preventDefault();
return;
}

});