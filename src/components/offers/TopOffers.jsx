/**
 * component that contains top offers of the day
 *  @author:Shravya P
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import useStyle from './styles';
import Deals from './Deals';

export default function TopOffers({ products }) {
  const classes = useStyle();
  return (
    <Box className={classes.Maincomponent}>
      <Box className={classes.leftComponent}>
        <Deals
          data={products}
          title="Deals of the Day"
          timer
          cat="DealsOfTheDay"
        />
      </Box>
      <Box className={classes.rightComponent}>
        <img src="https://rukminim1.flixcart.com/flap/464/708/image/28d7b7990028c9bf.jpg?q=70" style={{ width: 230 }} alt="01Feb-RFM-RFMob-RHS-UnmissableDeal" />
      </Box>
    </Box>
  );
}
TopOffers.propTypes = {
  products: PropTypes.arrayOf,
};
TopOffers.defaultProps = {
  products: [],
};
