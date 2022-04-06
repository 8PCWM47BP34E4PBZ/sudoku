import { Square } from "./square";

type BoxProps = {
  id: number;
  numbers: [
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?,
    number?
  ];
  answers: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
};

export const Box = (props: BoxProps) => {
  return (
    <>
      <div
        className="col col-lg-2"
        style={{
          color: "red",
          backgroundColor: "blue",
        }}
      >
        <div className="board-row">
          <Square number={props.numbers[0]} answer={props.answers[0]} />
          <Square number={props.numbers[1]} answer={props.answers[1]} />
          <Square number={props.numbers[2]} answer={props.answers[2]} />
        </div>
        <div className="board-row">
          <Square number={props.numbers[3]} answer={props.answers[3]} />
          <Square number={props.numbers[4]} answer={props.answers[4]} />
          <Square number={props.numbers[5]} answer={props.answers[5]} />
        </div>
        <div className="board-row">
          <Square number={props.numbers[6]} answer={props.answers[6]} />
          <Square number={props.numbers[7]} answer={props.answers[7]} />
          <Square number={props.numbers[8]} answer={props.answers[8]} />
        </div>
      </div>
    </>
  );
};
