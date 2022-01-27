import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import DropDown from '../dropDown/DropDown';
const useStyle = makeStyles(theme => ({
    container: {
        margin: "0 20px",
        minWidth: 112,
        maxWidth: 152
    },
    button: {
        color: '#2874f0',
        background: '#FFFFFF',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        height: 32,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }
    }
}))

export default function LoginButton() {
    const classes = useStyle();
    return <DropDown menu={
            <Button
        variant="contained"
            className={
classes.button}>
        Login</Button>
        }
        menus={
            [
                {
                    label: "My Profile",
                    href: "",
                    icon: null
                },
                {
                    label: "Flipkart Plus Zone",
                    href: "",
                    icon: null
                },
                {
                    label: "Orders",
                    href: `/account/orders`,
                    icon: null
                },
                {
                    label: "Wishlist",
                    href: "",
                    icon: null
                }, {
                    label: "Rewards",
                    href: "",
                    icon: null
                }, {
                    label: "Gift Cards",
                    href: "",
                    icon: null
                },
            ]
        }
        firstMenu={
            <div
        className="firstmenu">
        <span>
            New Customer?
</span>
<a
href
style={
{color: "#2874f0"}}>
        Sign Up</a></div>
        }/>
}
