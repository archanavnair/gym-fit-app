import React from "react"

const Button = (props) => {
    const {text , func } = props
  return (
    <button onClick={func} className="px-8 mx-auto py-4 rounded-md border border-blue-400 border-solid blueShadow duration-200">
        <p>{text}</p>
    </button>
  )
};

export default Button;
