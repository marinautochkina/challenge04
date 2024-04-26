
 function validateForm() {
    var username = document.forms["form"]["username"].value;
    var title = document.forms["form"]["title"].value;
    var content = document.forms["form"]["content"].value;
    if (username == "" || title == "" || content == "") {
      alert("Please complete the form");
      return false;
    };
};
function saveToLocalStorage () {
    localStorage.form;
};
var userName = document.getElementById("username");
var title = document.getElementById("title");
var content = document.getElementById("content");
var saveButton = document.getElementById("submit");

saveButton.addEventListener("click", function() {
  var userPost = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim()
  };
  localStorage.setItem("userPost", JSON.stringify(userPost));
});