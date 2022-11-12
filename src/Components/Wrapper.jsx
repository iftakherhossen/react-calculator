import React, { useState } from 'react';
import KeyPad from './KeyPad';
import Screen from './Screen';

const Wrapper = () => {
     let [calc, setCalc] = useState({
          sign: "",
          num: 0,
          res: 0,
     });

     return (
          <div className="md:w-[400px] md:h-auto bg-sky-700 rounded-2xl p-5 shadow-xl">
               <Screen value={calc.num ? calc.num : calc.res} />
               <KeyPad calc={calc} setCalc={setCalc} />
          </div>
     );
};

export default Wrapper;
