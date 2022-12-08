import classes from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
  className: string;
};

const Card = ({ children }: CardProps) => {
  return <section className={classes.card}>{children}</section>;
};

export default Card;
