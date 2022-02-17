/**
 * A page consisting of details of a single product
 * @status ongoing
 * @author:Shravya P
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {
  Table, TableBody, TableRow, TableCell,
} from '@material-ui/core';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';
import useStyle from './Styles';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { setCart } from '../../services/CartService';
import { addToCart } from '../../actions/cartActions';

export default function SingleProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyle();
  const product = useSelector((state) => state.allProducts.singleProduct);
  const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
  const cartItems = useSelector((state) => state.allCarts.cart);
  function checkCart(id) {
    return cartItems.some((el) => el.attributes.productId === id);
  }
  const handleCart = (item) => {
    const data = {
      data: {
        productId: item.productId,
        title: item.productName,
        url: item.imageUrl,
        sp: item.sellingPrice,
        op: item.originalPrice,
        discount: item.discount,
        quantity: 1,
      },
    };
    setCart(data).then((res) => { dispatch(addToCart(res)); }).catch();
  };
  return (
    <Box className={classes.container}>
      <Header />
      <Grid container spacing={2} className={classes.productContainer}>
        <Grid item xs={12} md={4} className={classes.productImage}>
          <img className={classes.image} src={product.attributes.imageUrl} alt="product" />
          <div className={classes.CartButtons}>
            <Button className={classes.button} style={{ marginRight: 10, background: '#ff9f00' }} variant="contained" onClick={() => { handleCart(product.attributes); }}>
              <ShoppingCartIcon />
              {checkCart(product.attributes.productId) === true ? 'Go To Cart' : 'Add to Cart'}
            </Button>
            <Button className={classes.button} style={{ background: '#fb641b' }} variant="contained" onClick={() => { handleCart(product.attributes); navigate('/cart/'); }}>
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
            <Table className={classes.table}>
              <TableBody>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>
                    Delivery by
                    {' '}
                    {date.toDateString()}
                    {' '}
                    | ₹40
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                  <TableCell>No Warranty</TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Seller</TableCell>
                  <TableCell className={classes.smallText}>
                    <span style={{ color: '#2874f0' }}>SuperComNet</span>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more sellers starting from ₹329</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>
                    <img src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50" alt="super-coin" style={{ width: 390 }} />
                  </TableCell>
                </TableRow>
                <TableRow className={classes.smallText}>
                  <TableCell className={classes.greyTextColor}>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
