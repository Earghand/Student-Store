import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useAsync } from 'react-async';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {Router, Switch, BrowserRouter, Route, useLocation} from "react-router-dom";
import Testing from "./components/testing" 
// import description from "./components/description";


const drawerWidth = 340;
const test = 4;
// const Testing = () => {
//   const location = useLocation();
//   const currItem = location.state?.currItem;
//   const ItemImage = location.state?.ItemImage;
//   const ItemDescription = location.state?.ItemDescription;
//   const ItemName = location.state?.ItemName;
//   return(
//     <div class = "overview">
//       <Typography style={{alignItems:"center"}}> {ItemName}</Typography>
//       <h2>test</h2>
//       <h3>{currItem}</h3>
//       <h3>{ItemImage}</h3>
//       <h4>{ItemDescription}</h4>
//       <img src={ItemImage}/>
//       <h3></h3> 
//     </div>
//   )
// }
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justify-content: flex-start,
    maxWidth: "100%",
  },
  media: {
    height: 140,
    width: "100%",
  },

  cards: {
    height: 350,
    width: 350,
    maxWidth: 350,
    maxHeight: 350,
    padding: "15px",
    // marginRight: "40px",
    // justifyContent:'space-around',
    marginBottom: "20px",
    position:'relative',
  },


  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const loadItems = async () =>
  await fetch("https://young-mesa-63269.herokuapp.com/api/featured")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())


  const HomePage = () => {
    
    const handleRoute = () =>{
      history.push("/description")
    }
    const history = useHistory();
    const [results, setResults] = useState([]);
    // const response = fetch("http://localhost:3000/api/featured/")
    // const res = response.json();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    const { data, error, isLoading } = useAsync({ promiseFn: loadItems })
    if (isLoading) return "Loading..."
    if (error) return `Something went wrong: ${error.message}`
    if (data)
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          style={{ background: '#37e08c' }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Student Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          {/* <List>
            {['Login', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List> */}
          <Typography variant="h4" noWrap align="center">
            Cart
          </Typography>
          <Divider />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div style={{ display: 'inline-flex', flexDirection: 'row', width: "100%", justifyContent : 'space-evenly', flexWrap: "wrap", maxWidth:"100%", position:"relative"}}>        
          {data.products.map(item=>(
            <div id="parent">
          <Card className = {classes.cards}>
          <Link style={{textDecoration:"none", color:"black"}}
  to={{
    pathname: "test",
    state: {
      currItem: item.id,
      ItemImage: item.image,
      ItemDescription: item.description,
      ItemName: item.name,
      ItemPrice: item.price,
    },
  }}
>
            <CardActionArea>
            <CardMedia
            className={classes.media}
            image={item.image}
            title="Food Item"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
            </CardContent>
            <BrowserRouter>
            <div>
          </div>
          </BrowserRouter>
            </CardActionArea>
            </Link>   
            <CardActions>
            <Button size="small" color="primary">
            Add to Cart
          </Button>
          <Typography size="small" color="primary" style={{marginLeft:"40%"}}>
            ${item.price}
          </Typography>
            </CardActions>
          </Card>
          </div>
            ))}
            {error ? <p>{error.message}</p> : null} 
                 {data.products.map(item=>(
            <div id="parent">
          </div>
            ))} 
          </div>
        </main>
        
      </div>
      
    );
    
  }

  function Home() {
    return (
      
      <BrowserRouter>
      <Switch>
      <div>
      <Route path="/test"component={Testing}/>
      <Route path="/home"component={HomePage}/>    
      </div>
      </Switch>
      </BrowserRouter> 
    );
}
export default Home
