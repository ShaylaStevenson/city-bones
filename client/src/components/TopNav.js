import React from "react";
import { makeStyles, fade } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, Paper, Box } from "@material-ui/core";
import { grey, teal, blue, lightBlue, brown } from "@material-ui/core/colors";
import MenuIcon from '@material-ui/icons/Menu';
import woodKitsap from "../img/wood-kitsap-overlay-1280x500.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //zIndex set higher than modal and drawer
    zIndex:"1500",
    position:"fixed",
    marginBottom: "10vh"
  },
  appBar: {
    height: "20vh",
    width: "100vw",
    backgroundImage: `url(${woodKitsap})`,
    //backgroundColor: "transparent",
    backgroundSize: "cover",
    position: "sticky",
    [theme.breakpoints.up('sm')]: {
      height: "25vh",
    },
    [theme.breakpoints.up('md')]: {
      height: "30vh",
    },
    [theme.breakpoints.up('lg')]: {
      height: "30vh",
    },
  },
  titlePaper: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    
    //rgba(105,105,105,.5)
    height: "20vh",
    [theme.breakpoints.up('sm')]: {
      height: "25vh",
    },
    [theme.breakpoints.up('md')]: {
      height: "30vh",
    },
    [theme.breakpoints.up('lg')]: {
      height: "30vh",
    },
  },
  title: {
    flexGrow: 1,
    //marginBottom: theme.spacing(2),
    color: "#fff",
    textShadow: "0 0 10px #000000",
    fontWeight: "900",
    textAlign: "center",
    letterSpacing: 4,
    padding: 3,
    fontFamily: 'Farro, sans-serif',
    //height: "20px"
  },
  bannerBox: {
    backgroundColor: grey[800],
  },
  bannerText: {
    padding: 10,
    color: "#fff",
    fontSize: "12px",
  },
}));

export default function TopNav({ }) {
  //console.log(props.isOpen)
  // make zindex greater than that of BottomIcon
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.bannerBox}>
        <Typography className={classes.bannerText}>
          PROUDLY BASED IN KITSAP COUNTY, WA
        </Typography>
      </Paper>

      <AppBar className={classes.appBar}>
          <Paper className={classes.titlePaper}>
            <Typography className={classes.title} variant="h4">
              Anchored Woodworks
            </Typography>
          </Paper>
      </AppBar>
    </div>

    // const useStyles = makeStyles((theme) => ({
//   brandDiv:{
//     //display: "flex",
//     //justifyContent: "flex-start"
//   },
//   appBar:{
//     backgroundColor: "#000000",
//     //paddingTop: 10,
//     //paddingLeft: 10,
//     boxShadow: "0 0 20px #f3c638",
//     height: "10vh"
//   },
//   image:{
//     width:"50px",
//     justifySelf:"flex-start"
//   },
//   iconDiv:{
//     display:"flex",
//     justifyContent:"flex-end"
//   }
// }));







    
      // <AppBar className={classes.appBar} position="fixed">
      //   <Toolbar>
      //     <div className={classes.brandDiv}>
      //       <img className={classes.image} src={P}/> <img className={classes.image} src={Y}/> <img className={classes.image} src={P}/>
      //     </div>
      //     <div className={classes.iconDiv}>
      //     <GitHubIcon/>
      //     <TwitterIcon/>
      //     </div>
      //   </Toolbar>
      // </AppBar>
    
  )
}
    // <AppBar className={classes.root} position="fixed">
    //         <Typography
    //             variant="h1"
    //             align="center"
    //             className={classes.brand}
    //             //color="fff"
    //         >
    //         PYP
    //         </Typography>
    // </AppBar>

    // root:{
    //   //height: "10vh",
    //   backgroundColor: "#000000"
    // //zIndex: 1400
    // },
    // brand: {
    //   color: "#000000",
    //   paddingTop: "3vh",
    //   textShadow: "0 0 10px #f3c638, 0 0 20px #8e2f71, 0 0 40px #d8293a, 0 0 60px #1a237e",
    //   fontWeight: 500,
    //   letterSpacing: 18,
    // }


// all types of text-emphasis-styles:
// textEmphasisStyle: "filled",
// textEmphasisStyle: "open",
// textEmphasisStyle: "dot",
// textEmphasisStyle: "circle",
// textEmphasisStyle: "double-circle",
// textEmphasisStyle: "triangle",
// textEmphasisStyle: "filled sesame",
// textEmphasisStyle: "open sesame",

      //textEmphasisStyle: "dot",
      //textEmphasisColor: "#e91e63",
      //textEmphasisPosition: "under",