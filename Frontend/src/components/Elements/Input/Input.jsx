import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <input
      type={type}
      className="text-sm rounded-lg block w-full p-2 placeholder: opacity-50"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
};

export default Input;
