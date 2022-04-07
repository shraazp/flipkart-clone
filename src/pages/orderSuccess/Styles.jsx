import {
  makeStyles,
} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  cartContainer: {
    backgroundColor: '#f1f3f6',
  },
  component: {
    marginTop: '55px',
    position: 'relative',
    padding: '14px 80px 0',
  },
  leftComponent: {
    backgroundColor: '#fff',
    borderRadius: '2px',
    display: 'flex',
    padding: '10px 24px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 15,
      paddingRight: 0,
    },
  },
  message: {
    color: '#2874f0',
    fontSize: '24px',
  },
  rightComponent: {
    backgroundColor: '#fff',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 0 0 20px',
    borderLeft: '1px solid #f0f0f0',
  },
  contact: {
    fontSize: '18px',
    fontWeight: 500,
    marginBottom: '2px',
  },
  order: {
    display: 'inline-block',
    borderRadius: '3px',
    backgroundColor: '#2874f0',
    color: '#fff',
    height: '30px',
    minWidth: '120px',
    textAlign: 'center',
    lineHeight: '30px',
    margin: '16px 0',
  },
  contactImage: {
    height: 'auto',
    width: '70px',
    marginRight: '20px',
  },
  title: {
    paddingBottom: '8px',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
  },
  address: {
    paddingTop: '10px',
    width: '75%',
    fontSize: '14px',
    lineHeight: 1.4,
  },
  phone: {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: 1.4,
  },
  number: {
    paddingLeft: '10px',
    display: 'inline',
    fontSize: '14px',
    lineHeight: 1.4,
  },
  orderTrack: {
    display: 'block',
    marginTop: '25px',
    wordBreak: 'break-word',
    fontSize: '14px',
    lineHeight: 1.4,
  },
}));
export default useStyle;
