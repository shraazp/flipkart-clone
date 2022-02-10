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
export default useStyles;
