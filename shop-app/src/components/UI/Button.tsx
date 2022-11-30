import classes from "./Button.module.css";

const Button: React.FC<{ children: React.ReactNode }> = (props) => {
  return <section className={classes.button}>{props.children}</section>;
};

export default Button;
