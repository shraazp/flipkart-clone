/**
 * styles for all header components
 * @author:Shravya P
 */
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  MoreContainer: {
    margin: '0 20px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    maxWidth: 150,
    fontFamily: 'Roboto,Arial,sans-serif',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  MoreButton: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    height: '100%',
    fontSize: 16,
    letterSpacing: '.1',
    fontWeight: 500,
    color: '#fff',
    textTransform: 'none',
    lineHeight: '20px',
    userSelect: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: 108,
  },
  dropdownContainer: {
    padding: 16,
  },
  dropDown: {
    margin: -16,
    width: 240,
    height: 254,
    maxWidth: '100%',
    position: 'absolute',
    top: '55px',
  },
  listItem: {
    textAlign: 'left',
    fontSize: '14px',
    lineHeight: 18,
    fontWeight: 400,
    color: '#212121',
  },
  cartContainer: {
    margin: '0 20px',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'flex-end',
    maxWidth: 150,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cart: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '20px',
    fontSize: 16,
    letterSpacing: '.1',
    fontWeight: 500,
    color: '#fff',
    position: 'relative',
    textDecoration: 'none',
    fontFamily: 'Roboto,Arial,sans-serif',
  },
  badge: {
    margin: '0 8px',
  },
  header: {
    background: '#2874f0',
    height: 55,
    boxShadow: 'none',
    width: '255px',
    marginTop: -7,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 20,
    width: 20,
    verticalAlign: 'middle',
    marginRight: 15,

  },
  login: {
    width: '75%',
    marginLeft: 20,
    fontSize: 16,
    color: '#fff',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginTop: 1,
    fontFamily: 'Roboto,Helvetica,Arial,sans-serif',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#414141',
    fontSize: '14px',
    fontWeight: 500,
  },
  Logincontainer: {
    margin: '0 20px',
    minWidth: 112,
    maxWidth: 152,
  },
  search: {
    borderRadius: 2,
    margin: '0 37.75px 0 12px',
    width: '38%',
    backgroundColor: '#fff',
    display: 'flex',
  },
  searchIcon: {
    marginLeft: 'auto',
    padding: 5,
    display: 'flex',
    color: 'blue',
  },
  inputRoot: {
    fontSize: 'unset',
    width: '100%',
  },
  inputInput: {
    paddingLeft: 20,
    width: '100%',
  },
  headerMain: {
    background: '#2874f0',
    height: 55,
    boxShadow: 'none',
  },
  toolbar: {
    minHeight: 55,
  },
  component: {
    marginLeft: '12%',
    lineHeight: 0,
    color: '#FFFFFF',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '111px',
      marginLeft: '0%',
    },
  },
  logoMain: {
    width: 75,
  },
  container: {
    display: 'flex',
  },
  subHeading: {
    fontSize: 11,
    fontStyle: 'italic',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  subURL: {
    width: 10,
    height: 10,
  },
  listMain: {
    height: 667,
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  customButtons: {
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  cartLogin: {
    position: 'absolute',
    right: '0',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '10px',
    // eslint-disable-next-line no-dupe-keys
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  LoginButton: {
    color: '#fff',
    marginTop: '5px',
  },
}));
export default useStyles;
