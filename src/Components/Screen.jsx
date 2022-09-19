import React from 'react';
import { Textfit } from "react-textfit";

const Screen = ({ value }) => {
     return (
          <Textfit className="h-[110px] p-5 flex items-center justify-end box-border font-semibold bg-sky-800 text-white rounded-lg" mode="single" max={70}>
               {value}
          </Textfit>
     );
};

export default Screen;