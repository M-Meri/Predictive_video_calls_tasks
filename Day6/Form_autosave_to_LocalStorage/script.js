function saveData() 
{
    const data = {
        name: document.getElementById("nameInput"),
        email: document.getElementById("emailInput"),
    }
    localStorage.setItem(formData, JSON.stringify("data"));
}

const currnetName = document.getElementById("theName");
const currnetEmail = document.getElementById("theEmail");

function seeTheData()
{
    const savedData = JSON.parse(localStorage.getItem("formData"));
    theName.textContent = savedData.name;
    theEmail.textContent = savedData.email;
}


document.getElementById("myForm").addEventListener('input', function(event) {
        clearTimeout(this.saveTimeout);
        this.saveTimeout = setTimeout(saveData, 1000);
        seeTheData();
});