import {Box, makeStyles, Typography} from '@material-ui/core';
import {navData} from '../../constants/data';
import Categories from './Categories';
import "./categories.scss"
const useStyle = makeStyles(theme => ({
    component: {
        marginTop: '55px',
        padding: '0px 69px 0px 69px',
        fontSize: 14,
        lineHeight: 1.4,
        fontFamily: "Roboto,Arial,sans-serif",
        letterSpacing: 0,
        color: "#000",
        boxShadow: "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        left: 0,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        padding: '12px 8px',
        textAlign: 'center',
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    image: {
        width: 64
    },

    text: {
        display: "flex",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit',
        color: "black",
        '&:hover': {
            color: "#2874f0"
        }
    }
}));


const NavBar = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={
                classes.component
            }>
                {
                navData.map(temp => (
                    <Box className={
                        classes.container
                    }>
                        <img src={
                                temp.url
                            }
                            className={
                                classes.image
                            }
                            alt=""/>
                        <div className="categories-dropDown">
                            <Typography className={
                                classes.text
                            }>
                                {
                                temp.text
                            }
                                {
                                temp.icon
                            }</Typography>
                            <div className="categories-link">
                                <div className="categories"></div>
                                <Categories/>
                            </div>
                        </div>
                    </Box>
                    
                ))
            } </Box>

        </>
    )
}

export default NavBar;
