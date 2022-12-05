import classes from "./Button.module.css";

const Button = (props: any) => {
  return (
    <section className={classes.button} onClick={props.onClick}>
      {props.children}
    </section>
  );
};

export default Button;
