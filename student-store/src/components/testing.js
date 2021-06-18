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
import Async from 'react-async';
import { useAsync } from 'react-async';
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {Router, Switch, BrowserRouter, Route, useLocation} from "react-router-dom";
import "./testing.css";
const Testing = () => {
    const location = useLocation();
    const currItem = location.state?.currItem;
    const ItemImage = location.state?.ItemImage;
    const ItemDescription = location.state?.ItemDescription;
    const ItemName = location.state?.ItemName;
    const ItemPrice = location.state?.ItemPrice;
    return(
      <div class = "overview">
        <Typography> 
            <h1 id="heading">{ItemName}</h1>
        </Typography>
        <img src={ItemImage}/> 
        <h4>${ItemPrice}</h4>
        <h3>{ItemDescription}</h3>
      </div>
    )
  }
  export default Testing;