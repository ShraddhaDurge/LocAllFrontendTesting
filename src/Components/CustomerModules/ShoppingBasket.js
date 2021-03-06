import React,{useState,useEffect} from 'react';
import {Grid, Card, Box, Button, CardContent, CardMedia, Typography, makeStyles} from '@material-ui/core';
import axios from 'axios';
import { Formik, Form, Field, ErrorMesage } from 'formik';
import Homebar from "./Homebar";
//import Footer from './Footer';
import Snack from '../Snackbar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Image from '../Images/2593108.png';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles=makeStyles({
card:{
    backgroundColor:"#EF9A9A",
    width:"1000px",
    height:"450px",
    padding:"auto auto",
    margin:"10px 80px"
}
,button:{
    color:"primary",
    '&:hover':{
        backgroundColor:"#2471A3",
    },
    marginTop:"20px",

}
});

const initialValues = {
          quantSelected: 0
      }

const ShoppingBasket = (props) => {

    const headStyle = {margin:'0', color:'#6200EE'}
    const [notify,setNotify]=useState({isOpen:false,mesg:''});
    const [itemCount, setItemCount] = React.useState(1);

    const myInfo = JSON.parse(localStorage.getItem("myInfo"))
//    const userid=myInfo.id;
    useEffect(()=>{
        axios.get(`http://localhost:8088/customer/getBasket/8`)
        .then(res=>{
            console.log(res)
            localStorage.setItem('myBasket',JSON.stringify(res.data))
            console.log(res.data.basketItems)
        })
        .catch(err=>{
            console.log(err)
        })
    },[8])

    const myBasket = JSON.parse(localStorage.getItem("myBasket"))
    const onSubmit = (values, props) => {

        const productId = myBasket.productId

        const Order = {
            productId: productId,
            quantSelected: itemCount
            }

        const dataInfo = JSON.parse(localStorage.getItem("myInfo"))
//        const custId = dataInfo.id;
        axios.post(`http://localhost:8088/customer/addToBasket/8`, Order)
        .then((response) => {
            var res=response.status
            console.log(response)
            console.log(response.status)
            if (res === 200) {
                setNotify({
                    isOpen:true,
                    mesg:"Added to basket"
                })
            }
        })
        .catch((error) => {
            if (error.response.status === 400) {
                setNotify({
                    isOpen:true,
                    mesg:error.response.message
                })

            }
            else{
            console.log(error)
            setNotify({
                isOpen:true,
                mesg:"Something went wrong!"
            })}
        });
    };

    const classes=useStyles();
    return(
        <Box>
           {/* <Homebar/>*/}
      <Box m={5}>

            <Grid container  spacing={6} >

                <Grid item xs={12} sm={6} md={6}>
                    <Card className={classes.card}>
                          <CardContent>
                          <Grid container spacing={5}>
                             <Grid item xs={6} style={{ margin:'0px 0px', padding:'0px 0px'}}>
                             </Grid>
                            <Grid item xs={4} style={{ margin:'0px auto', padding:'20px 50px', align:"center"}}>
                               <br></br>
                               <Typography gutterBottom variant="h3" component="div">
                              </Typography>
                               <Typography display="inline" gutterBottom variant="h5" component="div">
                                   </Typography>
                                   <Typography display="inline" gutterBottom variant="subtitle1" component="div">
                                       per item
                                  </Typography>


                             <Typography gutterBottom variant="h6" component="div">
                                  <Badge color="secondary" badgeContent={itemCount}>
                                            <ShoppingBasketIcon />{" "}
                                          </Badge>
                                          <ButtonGroup>
                                            <Button
                                              onClick={() => {
                                                setItemCount(Math.max(itemCount - 1, 0));
                                              }}
                                            >
                                              {" "}
                                              <RemoveIcon fontSize="small" />
                                            </Button>
                                            <Button
                                              onClick={() => {
                                                setItemCount(itemCount + 1);
                                              }}
                                            >
                                              {" "}
                                              <AddIcon fontSize="small" />
                                            </Button>
                                          </ButtonGroup>

                              </Typography>

                                <Button type='submit'  variant="contained" color="primary" disabled={props.isSubmitting}
                                className={classes.button} onClick={onSubmit} >{props.isSubmitting ? "Loading" : "Add to basket"}&nbsp;&nbsp;&nbsp;&nbsp;  <ShoppingBasketIcon /></Button>

                                </Grid>
                            </Grid>
                          </CardContent>
                    </Card>
                </Grid>

            </Grid>
            <Snack
              notify={notify}
              setNotify={setNotify}
              />
      </Box>
    </Box>
    )
}

export default ShoppingBasket;