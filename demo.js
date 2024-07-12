const form = document.querySelector(".form");
const names =document.getElementById("name")
const email =document.getElementById("email")
const password =document.getElementById("password")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getInputs();
});
function getInputs(){
    const nameEl = names.value.trim();
    const emailEl = email.value.trim();
    const passwordEl = password.value.trim();
    
   
    if(nameEl===""){
        setError(names,"Enter Name")
    }else{
        setSuccess(names)
    }
    if(emailEl===""){
        setError(email,"Enter Email")
    }else if (!validateEmail(emailEl)){
        setError(email,"Enter The correct Mail")

    }else {
        setSuccess(email)
    }
    if(passwordEl===""){
        setError(password,"Enter password")
    }else if(passwordEl.length<6){
        setError(password,"Password Must Be 6 character")
    }else{
        setSuccess(password)
    }
};

function setError(input,value){
    const label = input.parentElement;
    const errorEl= label.querySelector(".error");

    errorEl.innerText=  value;
    label.classList.add("errormsg");
    label.classList.remove("success");
};
function setSuccess(input,value){
    const label = input.parentElement;
    const errorEl= label.querySelector(".error");

    errorEl.innerText="✔";
    label.classList.add("success");
    label.classList.remove("errormsg");
};
function validateEmail(email) {
    // Regular expression pattern for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          
    // Test the email against the pattern
    return emailPattern.test(email);
}


    
