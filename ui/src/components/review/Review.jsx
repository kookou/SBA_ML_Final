import React , {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ShopInfo from './ShopInfo';
import MenuAndReviewArea from './MenuAndReviewArea';
import Navigation from '../mainPage/Navigation';
import axios from 'axios'


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },

  bg: {
    backgroundColor: theme.palette.background.paper,
  },


}));

const Review = ({match}) => {

  // console.log(match.params.shopid)
  const [shopdata, setDataShop] = useState([])
  const [fooddata, setDataFood] = useState([])
  useEffect(() => {
      // alert(match.params.shopid)
      axios.get(`http://localhost:8080/shop/${match.params.shopid}`)
      .then(res=>{
          // alert(`List Success`)
          setDataShop(res.data[0].Shop[0])
          setDataFood(res.data[1].Food)
          console.log(res.data[1].Food)
      })
      .catch(e=>{
          alert(`List Failure`)
          throw(e)
      })

  },[])


  return (
    <React.Fragment>
      <CssBaseline />
      <Navigation />
      <Grid container justify="center" >
          <ShopInfo  post={shopdata}/>
      </Grid>
      <Grid container justify="center" spacing={5} className={useStyles.mainGrid}>
         <MenuAndReviewArea  post={fooddata}/>
      </Grid>
    </React.Fragment>
  )
}

export default Review