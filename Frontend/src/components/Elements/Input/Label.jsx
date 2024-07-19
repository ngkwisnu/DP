import React from "react";

const Label = (props) => {
  const { htmlFor, text } = props;
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-2 text-sm font-medium text-black"
    >
      {text}
    </label>
  );
};

export default Label;
