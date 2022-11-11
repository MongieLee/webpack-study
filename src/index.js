import "./main.css";
import vueImage from "./images/vue.jpg";
import React from "react";
import ReactDom from "react-dom";
import { createRoot } from "react-dom/client";
// import { createApp } from "vue/dist/vue.runtime.esm-bundler";
import { createApp } from "vue";
import VueApp from "./vue-components/Main";
import ReactApp from "./react-components/App"

if (module.hot) {
  module.hot.accept("./react-components/App.js", () => {
    console.log("react组件局部更新");
  })
}


createRoot(document.querySelector("#react-app"))
  .render(<ReactApp />);

function addChilds() {
  const ele = document.createElement("div");
  ele.textContent = "函数添加的Div";
  ele.classList.add("red-text");
  ele.classList.add("bg");
  document.body.appendChild(ele);
}

// addChilds();

const abc = () => { }

function addImageEle() {
  const imgEle = new Image();
  imgEle.src = vueImage;
  imgEle.alt = "image";
  document.body.appendChild(imgEle);
}

// addImageEle();

// const App = () => {
// return <div>react's App</div>
// }

// ReactDom.render(<App />, document.querySelector("#app"));
// ReactDom.render(React.createElement("div", {}, ["react组件"]), document.querySelector("#react-app"));



// createRoot(document.querySelector("#react-app"))
//   .render(<ReactApp />);



createApp(VueApp).mount(document.querySelector("#vue-app"));
// createApp({
//   template: "<div>123{{ msg }}</div>",
//   data() {
//     return {
//       msg: "test Msg"
//     }
//   }
// }).mount("#app");