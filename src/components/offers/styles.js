import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  Maincomponent: {
    display: 'flex',
    padding: '8px',
    backgroundColor: '#fff',
  },
  leftComponent: {
    width: '83%',
    borderRadius: '2px',
    boxShadow: '0 2px 4px 0 rgb(0 0 0 / 8%)',
    padding: '0px 0px 10px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  rightComponent: {
    background: '#FFFFFF',
    maxWidth: '248px',
    marginLeft: 2,
    paddingTop: 10,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  component: {
    marginTop: 12,
    background: '#FFFFFF',
    padding: 8,
  },
  timer: {
    color: '#7f7f7f',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    width: 'auto',
    height: 150,
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  deal: {
    display: 'flex',
    padding: '15px 20px',
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 25,
  },
  button: {
    marginLeft: 'auto',
    backgroundColor: '#2874f0',
    borderRadius: 2,
    fontSize: 13,
  },
  wrapper: {
    padding: '25px 15px',
  },
}));
export default useStyle;
