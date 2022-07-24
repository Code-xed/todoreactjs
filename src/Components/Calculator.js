import React, { useState } from 'react';

function Calculator() {
  const [calc, setCalc] = useState("");
  const HandleClick = (e, val) => {
    setCalc(val);
  }
  return (
    <div className="flex flex-col">
      <input value={calc} onChange={(e) => setCalc(e.target.value)} />
      <div className="grid grid-cols-4 grid-rows-4" >
        <button onClick={HandleClick(1)} >1</button>
        <button onClick={HandleClick(2)} >2</button>
        <button onClick={HandleClick(3)} >3</button>
        <button onClick={HandleClick(4)} >4</button>
        <button onClick={HandleClick(5)} >5</button>
      </div>
    </div>
    );
}

export default Calculator;