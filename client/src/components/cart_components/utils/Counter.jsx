import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="button-container flex flex-row items-center justify-between gap-1">
      <button
        className="w-8 h-8 md:w-[43px] md:h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[16px] md:text-[20px] font-[500]"
        onClick={handleMinus}
      >
        {" "}
        -{" "}
      </button>
      <div className="counter-container w-[29px] h-[24px] md:w-[54px] md:h-[43] text-[16px] font-[500] text-[#4B5160] flex items-center justify-center">
        {counter}
      </div>
      <button
        className="w-8 h-8 md:w-[43px] md:h-[43px] border-solid border-[1px] border-[#336DF2] rounded-[8px] text-[#336DF2] text-[16px] md:text-[20px] font-[500]"
        onClick={handlePlus}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default Counter;
