import {
  makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  cartContainer: {
    backgroundColor: '#f1f3f6',
  },
  component: {
    padding: '8px',
    maxWidth: '1286px',
    margin: '55px auto 0 auto',
    display: 'flex',
  },
  leftComponent: {
    paddingRight: 15,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
      width: '100%',
    },
  },
  orderDetails: {
    paddingTop: 15,
    marginBottom: 15,
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
      width: '100%',
    },
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
    display: 'flex',
  },
  bottom: {
    padding: '16px 22px',
    background: '#fff',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    borderTop: '1px solid #f0f0f0',
  },
  placeOrder: {
    display: 'flex',
    marginLeft: 'auto',
    background: '#fb641b',
    color: '#fff',
    borderRadius: 2,
    width: 250,
    height: 51,
  },
  number: {
    fontSize: '12px',
    color: '#2874f0',
    backgroundColor: '#f0f0f0',
    borderRadius: '2px',
    padding: '3px 7px',
    verticalAlign: 'baseline',
    marginRight: '17px',
    height: '20px',
  },
  login: {
    color: '#878787',
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '6px',
    textTransform: 'uppercase',
  },
  email: {
    fontSize: '14px',
    maxWidth: '630px',
  },
  change: {
    padding: '0 32px',
    height: '40px',
    borderRadius: '2px',
    border: '1px solid #e0e0e0',
    color: '#2874f0',
    fontSize: '14px',
    fontWeight: '500',
    background: '#fff',
    marginLeft: 'auto',
    cursor: 'pointer',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      padding: '0px',
      border: 'none',
    },
  },
  formContainer: {
    padding: '16px 24px 12px',
    backgroundColor: '#f5faff',
    width: '100%',
    margin: 'auto',
  },
  form: {
    marginLeft: '18px',
    width: 'calc(100% - 34px)',
  },
  formInput: {
    height: '50px',
    width: '280px',
    fontSize: '14px',
    border: '1px solid #e0e0e0 ',
    outline: 'none',
    borderRadius: '2px',
    boxShadow: 'none',
    background: '#fff',
  },
  address: {
    height: '50px',
    maxWidth: '710px',
    fontSize: '14px',
    border: '1px solid #e0e0e0 ',
    outline: 'none',
    borderRadius: '2px',
    boxShadow: 'none',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '280px',
    },
  },
  button: {
    height: 48,
    width: 230,
  },
  codContainer: {
    backgroundColor: '#f5faff',
    padding: '16px 25px',
  },
  cod: {
    marginTop: '2px',
    marginLeft: '18px',
    color: '#000',
  },
}));

export default useStyle;
