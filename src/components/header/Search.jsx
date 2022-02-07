/**
 * search container in header
 * @author:Shravya P
 */
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import useStyles from './Styles';

export default function Search() {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="Search for products, brands and more"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
    </div>
  );
}
