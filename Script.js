// Comment Form Validation
document.querySelector(".btn-post").addEventListener("click", function () {

  let name = document.querySelector('input[type="text"]').value;
  let email = document.querySelector('input[type="email"]').value;
  let comment = document.querySelector("textarea").value;

  if (name === "" || email === "" || comment === "") {
    alert("Please fill all fields!");
    return;
  }

  // Main Comment Box
  let commentBox = document.createElement("div");
  commentBox.classList.add("d-flex", "gap-3", "py-4", "border-bottom");

  // Avatar
  let avatar = document.createElement("div");
  avatar.classList.add("comment-avatar");
  avatar.innerText = name.charAt(0).toUpperCase();

  // Content Area
  let content = document.createElement("div");

  // Username
  let userName = document.createElement("p");
  userName.style.fontSize = ".875rem";
  userName.style.fontWeight = "600";
  userName.style.marginBottom = "5px";
  userName.innerText = name;

  // Comment Text
  let userComment = document.createElement("p");
  userComment.classList.add("comment-text");
  userComment.style.marginBottom = "0";
  userComment.innerText = comment;

  // Append Content
  content.appendChild(userName);
  content.appendChild(userComment);

  // Append All
  commentBox.appendChild(avatar);
  commentBox.appendChild(content);

  // Add Comment
  document.querySelector(".comment-section").appendChild(commentBox);

  // Clear Fields
  document.querySelector('input[type="text"]').value = "";
  document.querySelector('input[type="email"]').value = "";
  document.querySelector("textarea").value = "";

  alert("Comment Posted Successfully!");

});
