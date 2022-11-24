let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
  
export const transit = signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
  
export const transit1 = login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});