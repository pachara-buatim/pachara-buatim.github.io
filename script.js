const navBar = document.getElementById("nav-bar");
const menuButton = document.querySelector(".menu-button");
const spotifyLogo = document.querySelector(".spotify");
const appleLogo = document.querySelector(".apple");
const amazonLogo = document.querySelector(".amazon");
const youtubeLogo = document.querySelector(".youtube");
const contactBtn = document.querySelector(".contact-btn");


window.addEventListener("scroll", () => {
   if (window.scrollY > window.innerHeight - 50) {
    navBar.classList.add("dark");
    menuButton.src = "assets/svg-dark/menu-dark.svg";
    spotifyLogo.src = "assets/svg-dark/spotify-logo-dark.svg";
    appleLogo.src = "assets/svg-dark/apple-logo-dark.svg";
    amazonLogo.src = "assets/svg-dark/amazon-logo-dark.svg";
    youtubeLogo.src = "assets/svg-dark/youtube-logo-dark.svg";
    contactBtn.classList.add("contact-btn-dark");
   } else {
    navBar.classList.remove("dark");
    menuButton.src = "assets/svgs/menu.svg";
    spotifyLogo.src = "assets/svgs/spotify-logo.svg";
    appleLogo.src = "assets/svgs/apple-logo.svg";
    amazonLogo.src = "assets/svgs/amazon-logo.svg";
    youtubeLogo.src = "assets/svgs/youtube-logo.svg";
    contactBtn.classList.remove("contact-btn-dark");
   }
});

window.addEventListener("load", () => {
   const bg = document.getElementById("animate-background");
   const outline = document.querySelector(".animate-title");

   setTimeout(() => {
      bg.classList.add("animate");
   }, 1100);

   setTimeout(() => {
      outline.classList.add("show-outline");
   }, 50);

});