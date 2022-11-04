import { createContext, useContext, useEffect, useState } from "react";
import { AppStyleType } from "../types/app-style-type";
import { randomElement } from "./random-utils";

export const AppStyleContext = createContext<AppStyleType | null>(null);

const colors = ["#80489C", "#E97777", "#E14D2A", "#61764B", "#4FA095"];

export const AppStyleProvider = (props: any) => {
  const setColor = () => {
    setState({ ...state, color: randomElement(colors) });
  };
  const [state, setState] = useState<AppStyleType>({
    color: "white",
    setColor: setColor,
  });

  useEffect(() => {
    setColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppStyleContext.Provider value={state}>
      {props.children}
    </AppStyleContext.Provider>
  );
};

export const useAppStyle = () => useContext(AppStyleContext);
