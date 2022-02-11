import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  container: {
    backgroundColor: '#f1f3f6',
  },
  productContainer: {
    width: '41.66%',
    bottom: '0',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '16px',
  },
  image: {
    marginTop: '64px',
    transition: 'opacity .5s linear',
    opacity: 1,
    borderRadius: '2px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  CartButtons: {
    marginTop: '12px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '50%',
    height: 50,
  },
  productDetails: {
    padding: '0px 0px 0px 24px',
    marginTop: '84px',
  },
  title: {
    marginTop: '12px',
    color: '#878787',
    display: 'block',
    fontWeight: 500,
  },
  desc: {
    color: '#212121',
  },
  tagline: {
    color: '#26a541',
    margin: '6px 0 -4px',
  },
  priceContainer: {
    display: 'inline-flex',
    paddingTop: '8px',
  },
  sp: {
    fontSize: '28px',
    verticalAlign: 'sub',
    fontWeight: 500,
    color: '#212121',
  },
  op: {
    fontSize: '16px',
    marginLeft: '12px',
    verticalAlign: 'middle',
    color: '#878787',
    textDecoration: 'line-through',
    alignSelf: 'center',
  },
  discount: {
    marginLeft: '12px',
    fontSize: '16px',
    fontWeight: '500',
    color: '#26a541',
    verticalAlign: 'middle',
    alignSelf: 'center',
  },
  alert: {
    display: 'inline',
    marginLeft: '12px',
    fontWeight: '500',
    color: '#ff6161',
    alignSelf: 'center',
  },
  ratingContainer: {
    marginBottom: '6px',
    cursor: 'pointer',
  },
  rating: {
    position: 'relative',
    padding: '2px 7px',
    borderRadius: '14px',
    fontSize: '16px',
    backgroundColor: '#26a541',
    verticalAlign: 'baseline',
  },
  reviews: {
    paddingLeft: '8px',
    fontWeight: 500,
    color: '#878787',
    fontSize: '14px',
  },
  fImage: {
    marginLeft: '12px',
    verticalAlign: 'middle',
    fontSize: '20px',
  },
  badge: {
    marginRight: 10,
    color: '#00CC00',
    fontSize: 15,
  },
  smallText: {
    fontSize: 14,
    verticalAlign: 'baseline',
    '& > *': {
      fontSize: 14,
      marginTop: 10,
    },
  },
  deliveryContainer: {
    display: 'flex',
    flexFlow: 'row',
  },
  delivery: {
    display: 'flex',
    flexFlow: 'column',
    padding: '32px 0px 0px',
  },
  deliveryTitle: {
    display: 'flex',
    alignItems: 'center',
    width: '90px',
    marginRight: '12px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#878787',
  },
  deliveryText: {
    margin: '24px 12px',
    display: 'inline-block',
  },
  codeText: {
    padding: '0 0 6px',
    fontSize: '14px',
    border: 'none',
    borderBottom: '2px solid #2874f0',
    fontWeight: 500,
    alignItems: 'center',
    display: 'inline-block',
    lineHeight: '25px',
    outline: 'none',
    boxShadow: 'none',
    width: '160px',
  },
  checkText: {
    fontWeight: 500,
    fontSize: '14px',
    color: '#878787',
    cursor: 'pointer',
    position: 'relative',
    borderBottom: '2px solid #2874f0',
    display: 'inline-block',
    paddingBottom: '6px',
    lineHeight: '25px',
  },
  service: {

  },
}));
export default useStyle;
