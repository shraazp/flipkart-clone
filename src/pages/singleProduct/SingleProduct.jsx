import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useStyle from './Styles';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function SingleProduct() {
  const classes = useStyle();
  return (
    <Box className={classes.container}>
      <Header />
      <Grid container spacing={2} className={classes.productContainer}>
        <Grid item xs={12} md={4} className={classes.productImage}>
          <img className={classes.image} src="https://rukminim1.flixcart.com/image/800/960/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50" width="100%" alt="product" />
        </Grid>
        <Grid item xs={12} md={8} className={classes.productDesc} />
      </Grid>
      <Footer />
    </Box>
  );
}
