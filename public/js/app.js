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
  //      console.log('inside if')
  //     postLink.classList.replace("postLinkClose", "postLinkOpen");
  //     userLink.classList.replace("userLinkClose", "userLinkOpen");
  //   }
  //   else {
  //      console.log('inside else')
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

let userNameInput = document.getElementById("userNameInput");
userNameInput.addEventListener("input", function(e){
  userNameInput.setCustomValidity('');//remove message when new text is input
});
userNameInput.addEventListener("invalid", function(e){
  userNameInput.setCustomValidity('Username must consist of lowercase letters only with no spaces');//custom validation message for invalid text
});

let nameInput = document.getElementById("nameInput");
nameInput.addEventListener("input", function(e){
  nameInput.setCustomValidity('');//remove message when new text is input
});
nameInput.addEventListener("invalid", function(e){
  nameInput.setCustomValidity('Name must be letters and spaces only');//custom validation message for invalid text
});


  
});