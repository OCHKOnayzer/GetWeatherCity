import React from 'react'
import search from '../image/loop.svg';
import classes from '../style/style.module.css';

const ButtonSearch = ({onViwe}) => {
  return (
    <div className={classes.button_wrapper}>
        <button className={classes.button_search} onClick={onViwe}><span><img src={search} alt="" /></span></button>
    </div>
    
  )
}

export default ButtonSearch