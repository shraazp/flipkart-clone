import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
  component: {
    width: '100%',
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
  },
  greyTextColor: {
    color: '#878787',
  },
  container: {
    '& > *': {
      padding: '15px 24px',
      background: '#fff',
      fontSize: 14,
    },
  },
  price: {
    float: 'right',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 600,
    borderTop: '1px dashed #e0e0e0',
    padding: '20px 2px',
    borderBottom: '1px dashed #e0e0e0',
  },
  safeMessageContainer: {
    margin: '4px 15px 8px',
    textAlign: 'center',
  },
  safeMessage: {
    fontSize: '14px',
    textAlign: 'left',
    display: 'inline-block',
    color: '#878787',
    padding: '5px 0 5px 35px',
    background: 'url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_b33c0c.svg) no-repeat 0 50%',
    backgroundSize: '25px 31px',
    fontWeight: '500',
  },
  image: {
    paddingTop: '10px',
  },
});
export default useStyle;
