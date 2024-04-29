function darkMode() {
    var elementBody = document.body;
    elementBody.classList.toggle("body-dark-mode");
    var topLine = document.getElementById("topline");
    topLine.classList.toggle("topline-dark-mode");
    var middleLine = document.getElementById("middleline");
    middleLine.classList.toggle("middleline-dark-mode");
};
