import React, { type ReactNode } from "react";

import "./button.css";

type ButtonVariant = "dark" | "green";

export interface ButtonProps {
  variant?: ButtonVariant;
  outlined?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = "dark",
  outlined = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${variant}-${outlined ? "outlined" : "solid"}`,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};
