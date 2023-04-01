const toggler = document.getElementById("toggler");
const mobileNav = document.getElementById("mobileNav");
const menuLink = document.querySelectorAll(".menu_item-link");



toggler.addEventListener("click", function () {
    mobileNav.style.display = "flex";
})


//close mobile menu when click on links
for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener("click", function () {
        mobileNav.style.display = "none";
    });
}

