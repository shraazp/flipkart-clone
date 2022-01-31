import React,{useState} from 'react';
import flipkart from "../../images/flipkart.png"
import plus from "../../images/plus.png";
import Search from './Search';
import CustomButtons from './CustomButtons';
import LoginButton from './LoginButton';
import { Menu } from '@material-ui/icons';
import { AppBar, Toolbar, makeStyles, Box, Typography, IconButton, Drawer, List} from '@material-ui/core';
import DrawerStyle from './Drawer';


const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55,
        boxShadow: "none"
    },
    toolbar: {
        minHeight: 55
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    },
    logo: {
        width: 75
    },
    container: {
        display: 'flex'
    },
    subHeading: {
        fontSize: 11,
        fontStyle: 'italic',
        '&:hover': {
            textDecoration: "underline"
        }
    },
    subURL: {
        width: 10,
        height: 10
    },
    list: {
        height:667
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    customButtons: {
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));
export default function Header() {
    const classes = useStyle();
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const list = () => (
        <Box sx={{width:"75%"}} className={classes.list} onClick={handleClose}>
            <List>
                <listItem button>
                    <DrawerStyle/>
                </listItem>
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed"
            className={
                classes.header
        }>
            <Toolbar className={
                classes.toolbar
            }>
               <IconButton
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer  sx= { {width:"75%" }}open={open} onClose={handleClose}>
                    {list()}
                </Drawer>
                <a href='/'
                    className={
                        classes.component
                }>
                    <img alt=""
                        src={flipkart}
                        className={
                            classes.logo
                        }/>
                    <Box component="span"
                        className={
                            classes.container
                    }>
                        <Typography className={
                            classes.subHeading
                        }>Explore
                            <Box component="span"
                                style={
                                    {
                                        color: '#FFE500',
                                        fontSize: "11px",
                                        fontWeight: 500,
                                        margin: "0 2px 0 2px",
                                        fontStyle: "italic"
                                    }
                            }>Plus</Box>
                        </Typography>
                        <img alt=""
                            src={plus}
                            className={
                                classes.subURL
                            }/>
                    </Box>
                </a>

                <Search/>
                <LoginButton/>
                <CustomButtons/>
            </Toolbar>
        </AppBar>
    )
}
