/**
 * A page consisting of details of a single product
 * @status ongoing
 * @author:Shravya P
 */
import React from 'react';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
=======
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
import useStyle from './Styles';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function SingleProduct() {
  const classes = useStyle();
<<<<<<< HEAD
  const product = useSelector((state) => state.allProducts.singleProduct);
=======
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
  return (
    <Box className={classes.container}>
      <Header />
      <Grid container spacing={2} className={classes.productContainer}>
        <Grid item xs={12} md={4} className={classes.productImage}>
<<<<<<< HEAD
          <img className={classes.image} src={product.attributes.imageUrl} width="100%" alt="product" />
          <div className={classes.CartButtons}>
            <Button className={classes.button} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained">
              <ShoppingCartIcon />
              Add to Cart
            </Button>
            <Button className={classes.button} style={{ background: '#fb641b' }} variant="contained">
              <FlashOnIcon />
              {' '}
              Buy Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={8} className={classes.productDesc}>
          <div className={classes.productDetails}>
            <Typography variant="subtitle1" className={classes.title}>{product.attributes.productName}</Typography>
            <Typography variant="h6" className={classes.desc}>{product.attributes.description}</Typography>
            <Typography variant="subtitle2" className={classes.tagline}>{product.attributes.tagline}</Typography>
            <Typography component="div" className={classes.priceContainer}>
              <span className={classes.sp}>{`₹${product.attributes.sellingPrice}`}</span>
              <span className={classes.op}>{`₹${product.attributes.originalPrice}`}</span>
              <span className={classes.discount}>{product.attributes.discount}</span>
              <span>
                <img
                  style={{
                    margin: '14px 0 0 8px',
                    cursor: 'pointer',
                  }}
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/info-basic_6c1a38.svg"
                  alt="price-info-icon"
                />

              </span>
              <span className={classes.alert}>Hurry, only a few left</span>
            </Typography>
            <Typography component="div" className={classes.ratingContainer}>
              <span className={classes.rating}>
                {product.attributes.ratings.ratingImg}
                {' '}
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="star" />
              </span>
              <span className={classes.reviews}>{`${product.attributes.ratings.ratings} ratings and ${product.attributes.ratings.reviews} reviews`}</span>
              <img className={classes.fImage} height="21" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
            </Typography>

            <Typography variant="subtitle1" style={{ marginTop: '8px', fontWeight: 500 }}>Available offers</Typography>
            <Box className={classes.smallText}>
              <Typography variant="subtitle2">
                <LocalOfferIcon className={classes.badge} fontSize="small" />
                Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
              </Typography>
              <Typography variant="subtitle2">
                <LocalOfferIcon className={classes.badge} fontSize="small" />
                Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction,
                Terms and Condition apply
              </Typography>
              <Typography variant="subtitle2">
                <LocalOfferIcon className={classes.badge} fontSize="small" />
                Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs
              </Typography>
              <Typography variant="subtitle2">
                <LocalOfferIcon className={classes.badge} fontSize="small" />
                Partner OfferExtra 10% off upto ₹500 on next furniture purchase
              </Typography>
            </Box>
            <div className={classes.deliveryContainer}>
              <div className={classes.delivery}>
                <span className={classes.deliveryTitle}>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="location" />
                  <span style={{ marginLeft: '8px' }}>Deliver To</span>
                </span>
                <div className={classes.deliveryText}>
                  <input type="text" placeholder="Enter delivery pincode" maxLength="6" autoComplete className={classes.codeText} value="" />
                  <span className={classes.checkText}>Check</span>
                </div>
              </div>
              <div className={classes.service} />
            </div>
          </div>
        </Grid>
=======
          <img className={classes.image} src="https://rukminim1.flixcart.com/image/800/960/kkfrjww0/t-shirt/h/1/t/l-t312-cgblwh-new-eyebogler-original-imafzs5hrjgzsfpr.jpeg?q=50" width="100%" alt="product" />
        </Grid>
        <Grid item xs={12} md={8} className={classes.productDesc} />
>>>>>>> 7d2d08d96a24b54cba1e253485d6cc6ccbda7aa4
      </Grid>
      <Footer />
    </Box>
  );
}
