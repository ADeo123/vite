<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>


  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

<button class="deleteBtn">Delete Card</button>
<button class="duplicateBtn"> Duplicate Card</button>
<button class="changeColorBtn"> Background Color</button>
<button class="ChangeHeadingBtn">Change Heading</button>

<div>
  <h1 id="heading"> Penn State University </h1>
  <img src="https://www.psu.edu/psu-edu-assets/images/shared/psu-mark.svg" width="400" class="image">
  <h2>Description</h2>
  <p1>The Penn State University logo showing the Nittany Lion. </p1>
  <button> <a href="https://hax.psu.edu"> Details
  </a> </button> 
</div>


</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}

div {
  text-align: center;
  border: 2px solid Black;
  padding: 8px 8px 32px 32px;
  width: 500px;
  height: 500px;
}

button {
  color: blue;
  padding: px 8px 8px 8px 8px;
  display: block;
  margin: auto
}

.btn:hover {
  background-color: blue; 
  color: white;
}

.btn:focus {
  background-color: blue; 
  color: white;
}

.image {
  padding: 8px 8px 32px 190px;
}

.heading{
  margin: 50px;
}

@media (min-width: 500px) and (max-width: 800px) {
  button {
    opacity: 0;
    display: none;
  }
}

@media (max-width: 500px) {
  div {
    font-size: 10px;
    image-size: auto;
  }
}


</style>

<script>
//Duplicates the card using vue 
document.querySelector(".duplicateBtn").addEventListener("click", function(e){
    const div = document.querySelector(".duplicateBtn");
    let division = div.cloneNode(true);
    document.body.appendChild(division);
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
  document.parentNode.removeChild(div);
});



</script>