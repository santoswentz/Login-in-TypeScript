import React from "react";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  background?: string;
  textColor?: string;
  loading?: boolean;
}
