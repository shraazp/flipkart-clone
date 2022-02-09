/* eslint-disable react/prop-types */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    margin: '0 8px',
    position: 'relative',
    transition: 'box-shadow .2s ease-in-out',
    width: '100%',
    height: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    '&:hover': {
      boxShadow: '0 3px 16px 0 rgb(0 0 0 / 11%)',
    },
  },
  cardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    color: '#878787',
    fontSize: '14px',
    fontWeight: 500,
  },
  description: {
    display: 'inline-block',
    width: 'calc(100% - 80px)',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    padding: 0,
    fontSize: '14px',
    lineHeight: '1.4',
  },
  color: {
    color: '#878787',
    fontSize: '0.75rem',
    paddingBottom: '5px',
    wordWrap: 'break-word',
  },
  price: {
    display: 'inline-block',
    fontSize: '16px',
    fontWeight: 500,
    color: '#212121',
  },
  original: {
    display: 'inline-block',
    marginLeft: '8px',
    textDecoration: 'line-through',
    fontSize: '14px',
    color: '#878787',
  },
  discount: {
    display: 'inline-block',
    marginLeft: '8px',
    color: '#388e3c',
    fontSize: '13px',
    letterSpacing: '-.2px',
    fontWeight: 500,
  },
  size: {
    color: '#878787',
    fontWeight: 500,
    fontSize: '14px',
  },
}));
// eslint-disable-next-line react/prop-types
export default function ProductCard({ item }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} sx={{ boxShadow: 'none' }}>
      <CardMedia
        className={classes.cardImage}
        component="img"
        image={item.attributes.imageUrl}
        alt="green iguana"
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
        <span className={classes.size}>Size &nbsp; M, L, XL, XXL</span>
      </CardContent>
    </Card>
  );
}
