
 function validateForm() {
    var username = document.forms["form"]["username"].value;
    var title = document.forms["form"]["title"].value;
    var content = document.forms["form"]["content"].value;
    if (username == "" || title == "" || content == "") {
      alert("Please complete the form");
      return false;
    };
};

var username = document.getElementById("username");
var title = document.getElementById("title");
var content = document.getElementById("content");



document.querySelector("button").addEventListener("click", saveToLocalStorage);


function saveToLocalStorage() {
  var userPost = {
    username: username.value.trim(),
    title: title.value.trim(),
    content: content.value.trim()
  };
  localStorage.setItem("userPost", JSON.stringify(userPost));
};
renderPost();
    function renderPost() {
      const postFromStorage=JSON.parse(localStorage.getItem("userPost"));
      const renderedPost=document.createElement("li")
      renderedPost.setAttribute("style", "border:solid 2px black; padding-left:20px");
      document.querySelector("ul").appendChild(renderedPost);
      const renderedUserName=document.createElement("h3");
      renderedUserName.innerText=postFromStorage.username;
      renderedPost.appendChild(renderedUserName);
      const renderedTitle=document.createElement("h3");
      renderedTitle.innerText=postFromStorage.title;
      renderedPost.appendChild(renderedTitle);
      const renderedContent=document.createElement("p");
      renderedContent.innerText=postFromStorage.content;
      renderedPost.appendChild(renderedContent);
    };