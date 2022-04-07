import { makeStyles } from '@material-ui/core';

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
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
    },
  },
  header: {
    padding: '15px 24px',
    background: '#fff',
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
}));
export default useStyle;
