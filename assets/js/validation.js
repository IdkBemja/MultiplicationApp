document.addEventListener("DOMContentLoaded", function () {

    const inputField = document.getElementById("answer");
    inputField.addEventListener("input", function () {
    inputField.value = inputField.value.replace(/[^0-9]/g, "");
    
})});