import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f1f3f6',
  },
  productContainer: {
    width: '41.66%',
    bottom: '0',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '16px',
  },
  productImage: {
    [theme.breakpoints.down('md')]: {
      padding: '20px 40px',
    },
  },
  image: {
    marginTop: '64px',
    transition: 'opacity .5s linear',
    opacity: 1,
    borderRadius: '2px',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
export default useStyle;
