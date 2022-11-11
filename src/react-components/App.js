import React from "react";
import axios from "axios";

const App = () => {
  const sendXhr = () => {
    axios.get("/api/hi")
  }
  return (<div>react App 组f件322f322s3
    <button onClick={sendXhr}>点击发送请求</button>
  </div>)
}

export default App;