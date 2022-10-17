import React from "react";
import style from './mainContent.module.scss'
import { Link } from "react-router-dom";

export default function MainContent(){
  return(
    <div className={style.root}>
      <div className={style.content}>
        <h1 className={style.content1}>TOP SCORES</h1>
        <h5 className={style.content2}>This top score from various games provided <br /> on this platform</h5>
      </div>
      <Link to='/auth' className={style.button}>See More</Link>
    </div>
  )
}