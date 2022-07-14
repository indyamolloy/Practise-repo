import React from "react";

//Type Aliases:
type Props = {
  name: string;
};

//or function Name({ name }: {name:string})

function Name({ name }: Props): JSX.Element {
  return <div>{name}</div>;
}

export default Name;
