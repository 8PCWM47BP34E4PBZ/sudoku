import React, { useContext } from "react";
import { themeContext } from "../contexts/theme";

const validateInput = (val: string) => {
  const validInput = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return validInput.includes(val);
};

type SquareProps = {
  number?: number;
  answer: number;
};

export const Square = (props: SquareProps) => {
  const ctx = useContext(themeContext);

  return (
    <input
      type={"text"}
      className="square"
      maxLength={1}
      onInput={(e) => {
        const val = e.currentTarget.value;
        if (val === "") {
          console.log("BS?");
        }
        console.log("val", val);
        if (validateInput(val)) {
          console.log("answer");
          console.log(props.answer);
          if (val === props.answer?.toString()) {
            const num = ctx.dark;
            console.log(num);
            ctx.setIsDark(num - 1);
            console.log(`ctx.dark: ${ctx.dark}`);
            e.currentTarget.disabled = true;
            e.currentTarget.style.backgroundColor = "green";
            e.currentTarget.style.color = "white";
          } else {
            console.log("incorrect");
            e.currentTarget.value = "";
          }
        } else {
          //alert("Please input 1-9");
          console.error("Invalid!!!");
          e.currentTarget.value = "";
        }
      }}
      defaultValue={props.number}
      disabled={props.number !== undefined}
    ></input>
  );
};
