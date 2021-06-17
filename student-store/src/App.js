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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const drawerWidth = 340;
const test = 4;
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
    maxWidth: 300,
    padding: "20px",
    // marginRight: "40px",
    marginBottom: "20px",
    position: 'relative',
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

export default function PersistentDrawerLeft() {
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
            Store
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
        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
          <typography>
            Item 1 {test}
          </typography>
          <h2>Test 2</h2>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ display: 'inline-flex', alignItems:'center', flexDirection: 'row', width: "100%", justifyContent : 'space-around', flexWrap: "wrap", maxWidth:"100%", minWidth: 0, position:"relative"}}>        
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
    
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
    
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
    
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
    
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        <Card className = {classes.cards}>
          <CardActionArea>
          <CardMedia
          className={classes.media}
          image="https://static.openfoodfacts.org/images/products/896/400/009/0879/front_en.14.full.jpg"
          title="Food Item"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food Item #1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            DESCRIPTION HERE
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
          Add to Cart
        </Button>
          </CardActions>
        </Card>
        {/* <Typography>
          Hello
        </Typography> */}
        </div>
      </main>
    </div>
  );
}
