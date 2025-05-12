var texts = [" Mahmoud Khalaf", " Engineer", " Developer"];
var index = 0;

function changeContent() {
    document.getElementById("profession").textContent = texts[index];
    index = (index + 1) % texts.length; // Loop through the array
}

setInterval(changeContent, 2000); // Change content every 1 second