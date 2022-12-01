import classes from "./Button.module.css";

const Button: React.FC<{ children: React.ReactNode; onClick: () => void }> = (
  props
) => {
  return (
    <section className={classes.button} onClick={props.onClick}>
      {props.children}
    </section>
  );
};

export default Button;
