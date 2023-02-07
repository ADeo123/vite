import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})

//Duplicates the card using vue 
vue.querySelector(".duplicateBtn").addEventListener("click", function(e){
    const div = vue.querySelector(".duplicateBtn");
    let division = div.cloneNode(true);
    vue.body.appendChild(division);
});

//JavaScript Hover implementation
vue.querySelector("div").addEventListener("mouseover", function (e) {
  const div = vue.querySelector("div");
  let hoverEffect = div.style.borderColor = "white";
  vue.body.appendChild(hoverEffect);
});

vue.querySelector("div").addEventListener("mouseout", function (e) {
  const div = vue.querySelector("div");
  let hoverEffect = div.style.borderColor = "black";
  vue.body.appendChild(hoverEffect);
});

//When the card is clicked the color changes
vue.querySelector("changeColorBtn").addEventListener("click", function (e) {
  const div = vue.querySelector("div");
  let divColor = (div.style.backgroundColor = "gray"); //changes the background to gray
  vue.body.appendChild(divColor);
});

//When the heading/title is clicked it is change to "something else"
vue.querySelector("ChangeHeadingBtn").addEventListener("click", function (e) {
  heading.innerHTML = "Something else"; //replaces the text of the heading
});

//Deletes the last duplicated card from the webpage
vue.querySelector(".deleteBtn").addEventListener("click", function (e) {
  let div = vue.querySelector("div");
  div.parentNode.removeChild(div);
});
