// Selecionar elementos
const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");








buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e); aparece as informações dele no console

    buttons.forEach((btn) =>
      btn.querySelector(".color").classList.remove("selected") //remove de cada im dos botoes
    );

    const button = e.target;

    const id = button.getAttribute("id"); 

    button.querySelector(".color").classList.add("selected");

   image.classList.add("changing");
   image.setAttribute("src", `img/iphone_${id}.jpg`);

   setTimeout(() => {
    image.classList.remove("changing");
   }, 200);
  });
});
