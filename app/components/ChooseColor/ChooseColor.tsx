import React from "react";
interface ColorSelector {
    handleColorChange: (color:string)=>void;
}

const ChooseColor: React.FC<ColorSelector> = ({ handleColorChange }) => {
  const colors = ["red", "green", "blue", "yellow"];
  return (
    <div>
      {colors.map((color) => (
        <button
          key={color}
          className="p-4 rounded-full m-3"
          style={{
            background: color,
            cursor: "pointer",
          }}
          onClick={()=>handleColorChange(color)}
        ></button>
      ))}
    </div>
  );
}

export default ChooseColor;
