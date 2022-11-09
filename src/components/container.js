import "./styles.less";
import img from "../assets/images/nhlt.jpg"


function component() {
  const ele = document.createElement('div');
  ele.style.width = '200px';
  ele.style.height = '200px';
  ele.innerHTML = ["Hi", "你好"].join(" ");
  ele.className="test-red example"
  document.body.appendChild(ele);

  const imgObj = new Image();
  imgObj.src = img;
  document.body.appendChild(imgObj);
}

component();