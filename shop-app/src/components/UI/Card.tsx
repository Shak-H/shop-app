import { PropsWithChildren } from "react";

import classes from "./Card.module.css";

type CardProps = PropsWithChildren<{
  className?: string;
}>;

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <section className={`${classes.card} ${className}`}>{children}</section>
  );
};

export default Card;
