import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() => ({
  searchInputContainer: {
    width: 560,
    position: 'relative',
    background: '#fff',
    height: 36,
    borderRadius: '1px',
    overflow: 'hidden',
    display: 'flex',
  },
  searchInput: {
    width: 518,
    border: 0,
    height: 36,
    outline: 'none',
    boxSizing: 'border-box',
    padding: '0 10px',
  },
  searchIconContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%',
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Roboto,Arial,sans-serif',
  },
  list: {
    position: 'absolute',
    color: '#000',
    background: '#FFFFFF',
    marginTop: 36,
  },
}));
export default function Search() {
  const classes = useStyles();
  return (
    <div style={{ marginLeft: '12px', marginRight: '37.750px' }}>
      <div className={classes.searchInputContainer}>
        <input
          className={classes.searchInput}
          placeholder="Search for products, brands and more"
        />
        <div className={classes.searchIconContainer}>
          <SearchIcon style={{ color: '#2874f0' }} />
        </div>
      </div>
    </div>
  );
}
