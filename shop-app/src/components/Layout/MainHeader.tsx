import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h1>Shak Sports</h1>
      <nav>
        <ul>
          <li>
            <button>Add to Cart</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
