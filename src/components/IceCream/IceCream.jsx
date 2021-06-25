import React from 'react';
import classes from './IceCream.module.css';
import Scoop from './Scoop/Scoop';

const IceCream = () =>
{
 return (
  <div>
   <div className={classes.icecream}>
     <p className={classes.cone}/>
     {/*  <p>Please start adding scoops</p> */}
     <Scoop/>
     <div className={classes.cherry}></div>
   </div>
 </div>
 )
}

export default IceCream
