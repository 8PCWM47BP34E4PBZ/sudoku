import { Box } from "../components/box";
import { useState, createContext, useContext } from "react";
import { themeContext, useDark } from "../contexts/theme";
// export function createCtx<ContextType>() {
//   const ctx = createContext<
//     ContextType | undefined
//   >(undefined);
//   function useCtx() {
//     const c = useContext(ctx);
//     if (!c)
//       throw new Error(
//         "useCtx must be inside a Provider with a value"
//       );
//     return c;
//   }
//   return [useCtx, ctx.Provider] as const;
// }

const Index = () => {
  const ctx = useDark();
  if (ctx.dark === 0) {
    return (
      <themeContext.Provider value={ctx}>
        <div className="container">
          <div className="row justify-content-md-center">
            <div
              className="col col-lg-2"
              style={{
                color: "red",
                backgroundColor: "blue",
              }}
              id="board-0"
            >
              Timer:
            </div>
            <div
              className="col-md-auto"
              style={{ color: "red", backgroundColor: "green" }}
            >
              終了！
            </div>
            <div
              className="col col-lg-2"
              style={{ color: "red", backgroundColor: "blue" }}
            ></div>
            Action Btn
          </div>
          <></>
          <div className="row justify-content-md-center">
            <Box
              id={0}
              numbers={[8, 5, 3, 9, 6, 2, 4, 1, 7]}
              answers={[8, 5, 3, 9, 6, 2, 4, 1, 7]}
            />
            <Box
              id={1}
              numbers={[4, 6, 1, 3, 7, 8, 5, 2, 9]}
              answers={[4, 6, 1, 3, 7, 8, 5, 2, 9]}
            />
            <Box
              id={2}
              numbers={[9, 2, 7, 1, 5, 4, 6, 8, 3]}
              answers={[9, 2, 7, 1, 5, 4, 6, 8, 3]}
            />
          </div>
          <div className="row justify-content-md-center">
            <Box
              id={3}
              numbers={[6, 9, 1, 2, 4, 5, 7, 3, 8]}
              answers={[6, 9, 1, 2, 4, 5, 7, 3, 8]}
            />
            <Box
              id={4}
              numbers={[2, 4, 3, 7, 8, 6, 9, 1, 5]}
              answers={[2, 4, 3, 7, 8, 6, 9, 1, 5]}
            />
            <Box
              id={5}
              numbers={[5, 7, 8, 3, 1, 9, 4, 6, 2]}
              answers={[5, 7, 8, 3, 1, 9, 4, 6, 2]}
            />
          </div>
          <div className="row justify-content-md-center">
            <Box
              id={6}
              numbers={[5, 7, 4, 1, 2, 6, 3, 8, 9]}
              answers={[5, 7, 4, 1, 2, 6, 3, 8, 9]}
            />
            <Box
              id={7}
              numbers={[1, 3, 2, 8, 9, 4, 6, 5, 7]}
              answers={[1, 3, 2, 8, 9, 4, 6, 5, 7]}
            />
            <Box
              id={8}
              numbers={[8, 9, 6, 7, 3, 5, 2, 4, 1]}
              answers={[8, 9, 6, 7, 3, 5, 2, 4, 1]}
            />
          </div>
        </div>
      </themeContext.Provider>
    );
  }
  return (
    <themeContext.Provider value={ctx}>
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="col col-lg-2"
            style={{
              color: "red",
              backgroundColor: "blue",
            }}
            id="board-0"
          >
            Timer:
          </div>
          <div
            className="col-md-auto"
            style={{ color: "red", backgroundColor: "green" }}
          >
            残り:{ctx.dark}
          </div>
          <div
            className="col col-lg-2"
            style={{ color: "red", backgroundColor: "blue" }}
          ></div>
          Action Btns
        </div>
        <></>
        <div className="row justify-content-md-center">
          <Box
            id={0}
            numbers={[8, 5, undefined, 9, 6, 2, 4, 1, 7]}
            answers={[8, 5, 3, 9, 6, 2, 4, 1, 7]}
          />
          <Box
            id={1}
            numbers={[4, 6, 1, 3, 7, 8, 5, 2, 9]}
            answers={[4, 6, 1, 3, 7, 8, 5, 2, 9]}
          />
          <Box
            id={2}
            numbers={[9, 2, 7, 1, 5, 4, 6, 8, 3]}
            answers={[9, 2, 7, 1, 5, 4, 6, 8, 3]}
          />
        </div>
        <div className="row justify-content-md-center">
          <Box
            id={3}
            numbers={[6, 9, 1, undefined, 4, 5, 7, 3, 8]}
            answers={[6, 9, 1, 2, 4, 5, 7, 3, 8]}
          />
          <Box
            id={4}
            numbers={[2, 4, 3, 7, undefined, 6, 9, 1, 5]}
            answers={[2, 4, 3, 7, 8, 6, 9, 1, 5]}
          />
          <Box
            id={5}
            numbers={[5, 7, 8, 3, 1, 9, 4, 6, 2]}
            answers={[5, 7, 8, 3, 1, 9, 4, 6, 2]}
          />
        </div>
        <div className="row justify-content-md-center">
          <Box
            id={6}
            numbers={[5, 7, 4, 1, 2, 6, 3, 8, 9]}
            answers={[5, 7, 4, 1, 2, 6, 3, 8, 9]}
          />
          <Box
            id={7}
            numbers={[1, 3, 2, 8, 9, 4, 6, 5, 7]}
            answers={[1, 3, 2, 8, 9, 4, 6, 5, 7]}
          />
          <Box
            id={8}
            numbers={[8, 9, 6, 7, 3, 5, 2, 4, 1]}
            answers={[8, 9, 6, 7, 3, 5, 2, 4, 1]}
          />
        </div>
      </div>
    </themeContext.Provider>
  );
};

export default Index;
