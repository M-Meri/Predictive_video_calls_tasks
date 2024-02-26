const images = document.getElementById("images");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let indx = 0;
const imageArr = ["1.jpeg", "2.jpg", "3.jpg"];

prevBtn.disabled = true;

nextBtn.addEventListener("click", function() {
    indx++;
    images.src = imageArr[indx];
    if(indx === 2) {
        nextBtn.disabled = true;
    }
    prevBtn.disabled = false;
});

prevBtn.addEventListener("click", function() {
    indx--;
    images.src = imageArr[indx];
    if(indx === 0) {
        prevBtn.disabled = true;
    }
    nextBtn.disabled = false;
});