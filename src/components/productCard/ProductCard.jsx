/**
 * Card for each product in the product categories
 * @author:Shravya P
 */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import useStyles from './Style';

export default function ProductCard({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ boxShadow: 'none' }}>
      <CardMedia
        className={classes.cardImage}
        component="img"
        image={item.attributes.imageUrl}
        alt={item.attributes.productName}
      />
      <CardContent>
        <Typography variant="subtitle2" className={classes.title} component="div">
          { item.attributes.productName}
        </Typography>
        <Typography variant="body2" className={classes.description}>
          {item.attributes.description}
        </Typography>
        <Typography variant="subtitle2" className={classes.color}>
          {item.attributes.productDetails.Color}
        </Typography>
        <img height="18" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" />
        <Typography component="div">
          <span className={classes.price}>
            {`₹${item.attributes.sellingPrice}`}
          </span>
          <span className={classes.original}>
            {`₹${item.attributes.originalPrice}`}
          </span>
          <span className={classes.discount}>{item.attributes.discount}</span>
        </Typography>
        <span className={classes.size}>{item.attributes.productDetails.Size}</span>
      </CardContent>
    </Card>
  );
}
