import React from 'react';

const toLocaleString = (num) => String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
const removeSpaces = (num) => num.toString().replace(/\s/g, "");

const Key = ({ num, calc, setCalc }) => {
     const numClickHandler = (e) => {
          e.preventDefault();
          const value = e.target.innerHTML;

          if (removeSpaces(calc.num).length < 16) {
               setCalc({
                    ...calc,
                    num:
                         calc.num === 0 && value === "0"
                              ? "0"
                              : removeSpaces(calc.num) % 1 === 0
                                   ? toLocaleString(Number(removeSpaces(calc.num + value)))
                                   : toLocaleString(calc.num + value),
                    res: !calc.sign ? 0 : calc.res,
               });
          }
     }
     const pointClickHandler = (e) => {
          e.preventDefault();
          const value = e.target.innerHTML;

          setCalc({
               ...calc,
               num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
          });
     }
     const operatorClickHandler = (e) => {
          e.preventDefault();
          const value = e.target.innerHTML;

          setCalc({
               ...calc,
               sign: value,
               res: !calc.res && calc.num ? calc.num : calc.res,
               num: 0,
          });
     }
     const equalsClickHandler = () => {
          if (calc.sign && calc.num) {
               const math = (a, b, sign) => sign === "+" ? a + b : sign === "-" ? a - b : sign === "x" ? a * b : a / b;

               setCalc({
                    ...calc,
                    res:
                         calc.num === "0" && calc.sign === "/"
                              ? "Can't divide with 0"
                              : toLocaleString(
                                   math(
                                        Number(removeSpaces(calc.res)),
                                        Number(removeSpaces(calc.num)),
                                        calc.sign
                                   )
                              ),
                    sign: "",
                    num: 0,
               });
          }
     }
     const invertClickHandler = () => {
          setCalc({
               ...calc,
               num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
               res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
               sign: "",
          });
     }
     const percentClickHandler = (e) => {
          let num = calc.num ? parseFloat(removeSpaces(calc.num)) : 0;
          let res = calc.res ? parseFloat(removeSpaces(calc.res)) : 0;

          setCalc({
               ...calc,
               num: (num /= Math.pow(100, 1)),
               res: (res /= Math.pow(100, 1)),
               sign: "",
          });
     }
     const resetClickHandler = (e) => {
          setCalc({
               ...calc,
               sign: "",
               num: 0,
               res: 0,
          });
     }


     return (
          <button
               className={`bg-sky-800 text-white font-bold flex justify-center items-center text-4xl pt-3 pb-4 rounded-lg ${num === 0 && "col-span-2"}`}
               onClick={num === "AC" ? resetClickHandler : num === "+-" ? invertClickHandler : num === "%" ? percentClickHandler : num === "=" ? equalsClickHandler : num === "/" || num === "x" || num === "-" || num === "+" ? operatorClickHandler : num === "." ? pointClickHandler : numClickHandler}
          >{num}</button>
     );
};

export default Key;