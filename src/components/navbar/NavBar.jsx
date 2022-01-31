import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { navData } from '../../constants/data';
import Categories from './Categories';
import './categories.scss';

const useStyle = makeStyles((theme) => ({
  component: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px',
    overflowX: 'overlay',
    [theme.breakpoints.down('md')]: {
      margin: 0,
    },
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'inherit',
  },
}));
function NavBar() {
  const classes = useStyle();
  const [cat, setCat] = React.useState(true);
  const handleHover = (val) => {
    setCat(val);
  };
  return (
    <div className={classes.component} onMouseLeave={() => { handleHover(false); }}>
      {navData.map((temp) => (
        <Box className="container" onMouseOver={() => { handleHover(true); }} onFocus={() => { handleHover(true); }}>
          <img
            src={temp.url}
            className={classes.image}
            alt=""
          />
          <div className="categories-dropDown">
            <Typography className={classes.text}>
              {temp.text}
              {temp.icon}
            </Typography>
            <div>
              {cat ? (
                <div className="categories-link">
                  <div className="categories" />
                  <Categories />
                </div>
              ) : null}
            </div>
          </div>
        </Box>
      ))}
    </div>
  );
}
export default NavBar;
