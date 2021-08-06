import React from "react";
import { GridList, makeStyles } from "@material-ui/core";
import { Paper, Typography, Card, Grid } from '@material-ui/core';
import { purple, lightBlue, blue, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    paperContainer:{  
        backgroundColor: grey[800],
        //backgroundImage: `url(${bulb})`,
        minHeight: "100vh",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        
        //backgroundColor:"transparent",
    },
    text:{
        color: "#fff"
    },
    cardGrid: {
        //marginTop: "27vh"
    },
    infoCard: {
        marginTop: "35vh",
        paddingLeft: "8vh",
        paddingRight: "8vh",
        paddingTop: 5,
        paddingBottom: 5,
        color: "#fff",
        textAlign: "center",
        boxShadow: "none",
        //height: "20vh",
        backgroundColor: "transparent"
    }
}))

const Home = () => {
    const classes = useStyles();
    return(
        <Paper
            elevation={1}
            className={classes.paperContainer}
        >
            <Grid container className={classes.cardGrid}>
                <Grid item  className={classes.infoCard}>
                    <Typography>
                        Crafted with care by one set of skilled hands.
                        <br></br>
                        The Process Button
                    </Typography>
                </Grid>
                <Grid item  className={classes.infoCard}>
                    <Typography>
                    Each project is custom made and specialized to suit your needs.<br></br>
                    View Gallery Button
                    </Typography>
                </Grid>
            </Grid>
            {/* <h1 className={classes.text}>New Mern Practice</h1>
            <h2 className={classes.text}>Author: Shayla Stevenson</h2> */}
            {/* <img src={creativeDesignScreen} alt="Shayla Stevenson" /> */}
        </Paper>
    )
}

export default Home;