//your JS code here. If required.
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");
let submit = document.querySelector("#submit");
let existing = document.querySelector("#existing");

if(localStorage.getItem("username")&&localStorage.getItem("password")){
    existing.style.display="block";
}
else{
    existing.style.display="none";
}


function showOutput(e) {
    e.preventDefault()
    console.log(username.value,password.value,checkbox.checked);
    if (checkbox.checked==true &&username.value&&password.value){
        localStorage.setItem("username",username.value);
        localStorage.setItem("password",password.value);
        existing.style.display="block";
    }
    else if(checkbox.checked==false &&username.value&&password.value){
        localStorage.clear();
    existing.style.display="none";
        
    }
    if (username.value&&password.value){
        alert(  "Logged in as "+username.value)
    }

    
}
function existingUser(){
    alert(  "Logged in as "+localStorage.getItem("username"));
}

submit.addEventListener("click", showOutput);
existing.addEventListener("click", existingUser);



