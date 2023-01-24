import { useState } from 'react';

import RightNav from './RightNav';

import classes from './MainHeader.module.css';

const Burger = () => {
  const [open, setOpen] = useState(false);

  const openBurgerHandler = () => {
    setOpen(!open);
  };

  const hamburgerTransform1 = open
    ? { backgroundColor: '#ccc', transform: 'rotate(45deg)' }
    : { backgroundColor: '#da291c', transform: 'rotate(0)' };

  const hamburgerTransform2 = open
    ? { backgroundColor: '#ccc', transform: 'translateX(100%)', opacity: 0 }
    : {
        backgroundColor: '#da291c',
        transform: 'translateX(0)',
        opacity: 1,
      };

  const hamburgerTransform3 = open
    ? { backgroundColor: '#ccc', transform: 'rotate(-45deg)' }
    : { backgroundColor: '#da291c', transform: 'rotate(0)' };

  return (
    <>
      <div
        className={classes.header__burger}
        data-open={open}
        onClick={openBurgerHandler}
      >
        <div
          className={classes['header__burger--single']}
          style={hamburgerTransform1}
        />
        <div
          className={classes['header__burger--single']}
          style={hamburgerTransform2}
        />
        <div
          className={classes['header__burger--single']}
          style={hamburgerTransform3}
        />
      </div>
      <RightNav
        open={open}
        role="button"
        aria-label="Button to open Navigation"
        tabindex="1"
      />
    </>
  );
};

export default Burger;
