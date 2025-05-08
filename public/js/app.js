document.addEventListener("DOMContentLoaded", function () {
  const highlightButton = document.getElementById('selectPost');
  const posts = document.getElementsByClassName('postList');

  highlightButton.addEventListener("click", function () {
    for (let i = 0; i < posts.length; i++) {
      posts[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }
  });

  const menu = document.getElementById("menuButton");
  const postLink = document.getElementById('postLink');
  const userLink = document.getElementById('userLink');
  console.log(menu)

  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target)) {
      postLink.style.display = 'none';
      userLink.style.display = "none";
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key == "Escape") {
      postLink.style.display = 'none';
      userLink.style.display = "none";
    }
  });




});






