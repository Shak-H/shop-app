import classes from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  role: string;
  tabindex: string;
  title: string;
}

const Button = ({
  children,
  onClick,
  role,
  tabindex,
  className,
  title,
}: ButtonProps) => {
  return (
    <section className={classes.button} onClick={onClick}>
      {children}
    </section>
  );
};

export default Button;
