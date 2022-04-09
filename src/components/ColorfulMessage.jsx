// React17より、JSXを使用するだけの場合、ReactのImportは必須ではなくなりました。
import React, { StrictMode } from "react";

const ColofulMessage = (props) => {
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontsize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
