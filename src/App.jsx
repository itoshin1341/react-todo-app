import React, { StrictMode, useState } from "react";
import ColofulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColofulMessage color="blue">お元気ですか？</ColofulMessage>
      <ColofulMessage color="pink">元気です！</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ・∇・)</p>}
    </>
  );
};

export default App;

// Lesson47.　3min 30second より視聴する。
