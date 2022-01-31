import React from 'react';
import logo from '../../images/logo.png'
import {
    AppBar,
    makeStyles,
    Box,
    List,
    ListItem,
    ListItemText,
    Divider
} from '@material-ui/core';
import {drawerData} from '../../constants/data';
import PersonIcon from '@mui/icons-material/Person';
const useStyle = makeStyles(theme => ({
    header: {
        background: '#2874f0',
        height: 55,
        boxShadow: "none",
        width: "255px",
        marginTop: -7,
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    logo: {
        height: 20,
        width: 20,
        verticalAlign: "middle",
        marginRight: 15

    },
    login: {
        width: "75%",
        marginLeft: 20,
        fontSize: 16,
        color: "#fff",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        marginTop: 1,
        fontFamily: "Roboto,Helvetica,Arial,sans-serif"
    },
    list: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#414141",
        fontSize: "14px",
        fontWeight: 500
    }
}))
export default function DrawerStyle() {
    const classes = useStyle();
    return <div>
        <AppBar position="static"
            className={
                classes.header
        }>
            <PersonIcon style={
                {marginLeft: 12}
            }/>
            <span className={
                classes.login
            }>Login & Signup</span>
            <img alt=""
                src={logo}
                className={
                    classes.logo
                }/>
        </AppBar>
        <Box sx={
            {
                margin: 0,
                padding: "8px 0",
                borderBottom: "1px solid #e0e0e0"

            }
        }>
            <nav aria-label="main mailbox folders">
                <List className={
                    classes.list
                }>
                    {
                    drawerData.map(temp => (
                        <ListItem>
                            <ListItemText primary={temp}/>
                        </ListItem>
                    ))
                }
                    <Divider/>
                    <ListItem>Choose Language / भाषा चुनें</ListItem>
                    <Divider/>
                    <ListItem>Offer Zone</ListItem>
                    <ListItem>Game Zone</ListItem>
                    <Divider/>
                    <ListItem>My Orders</ListItem>
                    <ListItem>My Coupons</ListItem>
                    <ListItem>My Cart</ListItem>
                    <ListItem>My Wishlist</ListItem>
                    <ListItem>My Account</ListItem>
                    <Divider/>
                    <ListItem>Gift Card</ListItem>
                    <ListItem>Sell On Flipkart</ListItem>
                </List>
            </nav>
        </Box>


    </div>;
}
