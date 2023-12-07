const menuTlacitko = document.querySelector("#menu-tlacitko");
const menuPolozky = document.querySelector("#menu-polozky");
const ikona1 =  document.querySelector(".fas fa-bars");
const ikona2 =  document.querySelector(".fas fa-xmark");

menuTlacitko.addEventListener("click", () => {
    menuPolozky.classList.toggle("show")

    /*if (menuPolozky.classList.add("show") === true) {

    }*/
});



