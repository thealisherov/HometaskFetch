const container = document.querySelector(".container");
const articlePlace = document.querySelector(".articlePlace");

const baseURL = "https://dummyjson.com/posts";
window.addEventListener("DOMContentLoaded", () => {
  fetch(baseURL)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      data.posts.forEach((post) => {
        let div = document.createElement("div");
        div.setAttribute("class", ".article");
        div.innerHTML = `
<h1 class="articleTitle">${post.title}</h1>
<div class="articleBody">
    ${post.body}
</div>
<div class="articledata">
<div class="like">👍 ${post.reactions.likes}</div>
<div class="disklike">👎${post.reactions.dislikes}</div>
<div class="views">👁️${post.views}</div>
     `;
        articlePlace.appendChild(div);
      });
    });

  // windowni chegarasi
});
