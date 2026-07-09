import type { ButtonHTMLAttributes, ReactNode } from "react";

import classes from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={`${classes.button} ${className ?? ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
