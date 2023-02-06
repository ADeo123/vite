import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

vue.querySelector(".duplicateBtn").addEventListener("click", function(e){
    var div = vue.querySelector(".duplicateBtn");
    let division = div.cloneNode(true);
    vue.body.appendChild(division);
});

//JavaScript Hover implementation
document.querySelector("div").addEventListener("mouseover", function (e) {
  const div = document.querySelector("div");
  let hoverEffect = div.style.borderColor = "white";
  document.body.appendChild(hoverEffect);
});

document.querySelector("div").addEventListener("mouseout", function (e) {
  const div = document.querySelector("div");
  let hoverEffect = div.style.borderColor = "black";
  document.body.appendChild(hoverEffect);
});

//When the card is clicked the color changes
document.querySelector("changeColorBtn").addEventListener("click", function (e) {
  const div = document.querySelector("div");
  let divColor = (div.style.backgroundColor = "gray"); //changes the background to gray
  document.body.appendChild(divColor);
});

//When the heading/title is clicked it is change to "something else"
document.querySelector("ChangeHeadingBtn").addEventListener("click", function (e) {
  heading.innerHTML = "Something else"; //replaces the text of the heading
});

//Deletes the last duplicated card from the webpage
document.querySelector(".deleteBtn").addEventListener("click", function (e) {
  let div = document.querySelector("div");
  div.parentNode.removeChild(div);
});
