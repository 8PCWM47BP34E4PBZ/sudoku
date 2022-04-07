import { themeContext, useSudoku } from "../contexts/theme";
import { Line } from "../components/line";
import { useEffect } from "react";

const Index = () => {
  const ctx = useSudoku();
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `残り： ${ctx.remainingQuestion} 問`;
    if (ctx.remainingQuestion === 0) {
      alert("終了");
    }
  });
  return (
    <themeContext.Provider value={ctx}>
      <br />
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="col-md-auto"
            style={{ color: "red", backgroundColor: "green" }}
          >
            残り:{ctx.remainingQuestion}問
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-4">
            <br />
          </div>
        </div>
        {/*  */}
        <Line
          id={0}
          classNames={[
            "top-left-board-border",
            "top-board-border",
            "top-board-right-block-border",
            "top-board-left-block-border",
            "top-board-border",
            "top-board-right-block-border",
            "top-board-left-block-border",
            "top-board-border",
            "top-right-board-border",
          ]}
          numbers={[8, 5, 3, 4, 6, undefined, 9, 2, 7]}
          answers={[8, 5, 3, 4, 6, 1, 9, 2, 7]}
        />

        <Line
          id={1}
          classNames={[
            "left-board-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-board-border",
          ]}
          numbers={[9, 6, undefined, 3, 7, 8, 1, 5, 4]}
          answers={[9, 6, 2, 3, 7, 8, 1, 5, 4]}
        />
        <Line
          id={2}
          classNames={[
            "left-board-bottom-block-border",
            "bottom-block-border",
            "bottom-right-block-border",
            "bottom-left-block-border",
            "bottom-block-border",
            "bottom-right-block-border",
            "bottom-left-block-border",
            "bottom-block-border",
            "right-board-bottom-block-border",
          ]}
          numbers={[4, 1, 7, 5, 2, 9, 6, 8, undefined]}
          answers={[4, 1, 7, 5, 2, 9, 6, 8, 3]}
        />
        <Line
          id={3}
          classNames={[
            "left-board-top-block-border",
            "top-block-border",
            "top-right-block-border",
            "top-left-block-border",
            "top-block-border",
            "top-right-block-border",
            "top-left-block-border",
            "top-block-border",
            "right-board-top-block-border",
          ]}
          numbers={[6, 9, 1, 2, 4, 3, 5, 7, 8]}
          answers={[6, 9, 1, 2, 4, 3, 5, 7, 8]}
        />
        <Line
          id={4}
          classNames={[
            "left-board-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-board-border",
          ]}
          numbers={[2, 4, 5, 7, 8, 6, 3, 1, 9]}
          answers={[2, 4, 5, 7, 8, 6, 3, 1, 9]}
        />
        <Line
          id={5}
          classNames={[
            "left-board-bottom-block-border",
            "bottom-block-border",
            "bottom-right-block-border",
            "bottom-left-block-border",
            "bottom-block-border",
            "bottom-right-block-border",
            "bottom-left-block-border",
            "bottom-block-border",
            "right-board-bottom-block-border",
          ]}
          numbers={[7, 3, 8, 9, 1, 5, 4, 6, 2]}
          answers={[7, 3, 8, 9, 1, 5, 4, 6, 2]}
        />
        <Line
          id={6}
          classNames={[
            "left-board-top-block-border",
            "top-block-border",
            "top-right-block-border",
            "top-left-block-border",
            "top-block-border",
            "top-right-block-border",
            "top-left-block-border",
            "top-block-border",
            "right-board-top-block-border",
          ]}
          numbers={[5, 7, 4, 1, 3, 2, 8, 9, 6]}
          answers={[5, 7, 4, 1, 3, 2, 8, 9, 6]}
        />
        <Line
          id={7}
          classNames={[
            "left-board-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-block-border",
            "left-block-border",
            "normal-border",
            "right-board-border",
          ]}
          numbers={[1, 2, 6, 8, 9, 4, 7, 3, 5]}
          answers={[1, 2, 6, 8, 9, 4, 7, 3, 5]}
        />
        <Line
          id={8}
          classNames={[
            "bottom-left-board-border",
            "bottom-board-border",
            "bottom-board-right-block-border",
            "bottom-board-left-block-border",
            "bottom-board-border",
            "bottom-board-right-block-border",
            "bottom-board-left-block-border",
            "bottom-board-border",
            "bottom-right-board-border",
          ]}
          numbers={[3, 8, 9, 6, 5, 7, 2, 4, 1]}
          answers={[3, 8, 9, 6, 5, 7, 2, 4, 1]}
        />
      </div>
    </themeContext.Provider>
  );
};

export default Index;
