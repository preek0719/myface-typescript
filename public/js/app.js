document.addEventListener("DOMContentLoaded", function () {

  if (document.getElementById("postListid")) {
    const highlightButton = document.getElementById('selectPost');
    const posts = document.getElementsByClassName('postList');

    highlightButton.addEventListener("click", function () {
      for (let i = 0; i < posts.length; i++) {
        posts[i].style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }
    });
  }

  // const menu = document.getElementById("menuButton");
  // const postLink = document.getElementById('postLink');
  // const userLink = document.getElementById('userLink');

  // menu.addEventListener("click", function () {
  //   if ((postLink.classList.contains('postLinkClose')) && (userLink.classList.contains('userLinkClose'))) {
  //     // console.log('inside if')
  //     postLink.classList.replace("postLinkClose", "postLinkOpen");
  //     userLink.classList.replace("userLinkClose", "userLinkOpen");
  //   }
  //   else {
  //     // console.log('inside else')
  //     postLink.classList.replace("postLinkOpen", "postLinkClose");
  //     userLink.classList.replace("userLinkOpen", "userLinkClose");
  //   }
  // });

  // document.addEventListener('click', function (e) {
  //   if (!menu.contains(e.target)) {
  //     postLink.classList.replace("postLinkOpen", "postLinkClose");
  //     userLink.classList.replace("userLinkOpen", "userLinkClose");
  //   }
  // });

  // menu.addEventListener('keydown', function (e) {
  //   if (e.key == "Escape") {
  //     postLink.classList.replace("postLinkOpen", "postLinkClose");
  //     userLink.classList.replace("userLinkOpen", "userLinkClose");
  //   }
  // });

const menu = document.querySelector(".menuArea");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".menu");
//const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    // menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    // closeIcon.style.display = "block";
    // menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target)) {
      menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    // menuIcon.style.display = "block";
    }
  });

  document.addEventListener('keydown', function (e) {
       if (e.key == "Escape") {
      menu.classList.remove("showMenu");
    // closeIcon.style.display = "none";
    // menuIcon.style.display = "block";
    }
  });
  
});