import React from "react";
import type { ReactNode } from "react";

type Props = {
  // Union type or bring in ReactNode:
  //   children: JSX.Element | JSX.Element[];
  children: ReactNode;
};

function Card({ children }: Props) {
  return <div style={{ color: "pink" }}>{children}</div>;
}

export default Card;

//Styling support comes with typescript react
