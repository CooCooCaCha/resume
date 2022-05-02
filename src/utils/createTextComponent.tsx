import React from "react";

interface TextComponentProps {
  children: string;
}

const createTextComponent =
  (className: string) =>
  ({ children }: TextComponentProps) =>
    <div className={className}>{children}</div>;

export default createTextComponent;
