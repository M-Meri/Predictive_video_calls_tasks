const employees = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      department: "Engineering",
      role: { title: "Frontend Developer", level: "Mid" },
      contact: { email: "john.doe@example.com", phone: "123-456-7890" },
      skills: ["JavaScript", "React", "CSS"]
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      department: "Design",
      role: { title: "UI/UX Designer", level: "Senior" },
      contact: { email: "jane.smith@example.com", phone: "098-765-4321" },
      skills: ["Figma", "Sketch", "Adobe XD"]
    },
  ];

const table = document.getElementById("table");
const tableBody = table.getElementsByTagName("tbody")[0];

function displayData() {
    employees.forEach( emp => {
        const newRow = tableBody.insertRow();
        Object.keys(emp).forEach((key, index) => {
            const newCell = newRow.insertCell();
            if (key === "skills"){
                emp[key].forEach(skill => {
                    newCell.textContent += skill + ' ';
                })
            }
            else if (key === "role") {
                newCell.textContent = emp[key].title;
                const newCell2 = newRow.insertCell();
                newCell2.textContent = emp[key].level;
            }
            else if (key === "contact") {
                newCell.textContent = emp[key].email;
                const newCell2 = newRow.insertCell();
                newCell2.textContent = emp[key].phone;
            }
            else {
                newCell.textContent = emp[key];
            }

        });
        
    });
}

displayData();