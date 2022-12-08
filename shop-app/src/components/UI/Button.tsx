import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  role: string;
  tabindex: string;
}

const Button = ({
  children,
  onClick,
  role,
  tabindex,
  className,
}: ButtonProps) => {
  return (
    <section className={classes.button} onClick={onClick}>
      {children}
    </section>
  );
};

export default Button;
