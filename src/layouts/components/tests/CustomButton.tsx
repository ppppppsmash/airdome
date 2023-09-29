import { useState } from "react";

export const CustomButton = () => {
  const [state, setState] = useState(false);
  const [buttonColor, setButtonColor] = useState("bg-black");

  const handleClick = () => {
    setState((prev) => !prev)
    setButtonColor("bg-amber-600")
  }

  return (
    <div className="" data-testid="custom-button">
      <button
        className={`btn btn-primary ${state && buttonColor}`}
        type="button"
        onClick={handleClick}
      >
        {state ? "ロケットパンチ" : "ブレストファイヤー"}
      </button>
    </div>
  )
};