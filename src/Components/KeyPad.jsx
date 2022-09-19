import React from 'react';
import Key from './Key';

const keys = ["AC", "+-", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "="];

const KeyPad = ({ calc, setCalc }) => {
     return (
          <div className="grid grid-cols-4 gap-3 mt-5">
               {
                    keys.map(num => (
                         <Key num={num} calc={calc} setCalc={setCalc} key={num} />
                    ))
               }
          </div>
     );
};

export default KeyPad;