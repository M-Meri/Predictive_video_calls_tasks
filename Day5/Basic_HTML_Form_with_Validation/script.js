const emailRegex = /\b[A-Za-z0-9.]+@[A-Za-z0-9.]+\.[A-Za-z]{2,}\b/;  

const Name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");

const nameLabel = document.getElementById("name_error");
const emailLabel = document.getElementById("email_error");

const button = document.getElementById("submit");

button.addEventListener("click", function(){
    if(Name.value.trim() === "")
    {
        nameLabel.style.display = "block";
    }
    else 
    {
        nameLabel.style.display = "none";
    }
    if(emailRegex.test(email.value)) 
    {
        emailLabel.style.display = "none";
    }
    else 
    {
        emailLabel.style.display = "block";
    }
});