
function renderUserPost() {
    var userPostFromLocalStorage = JSON.parse(localStorage.getItem("userPost"));
    var newPost = document.createElement("div");
    newPost=document.innerText(userPostFromLocalStorage);
    body.appendChild(newPost);
  };

  renderUserPost();
