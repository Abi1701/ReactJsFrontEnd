import React from "react";
import style from './topscoreContent1.module.scss'
import Box from '../../../assets/Rectangle 21.svg'
import Evan from '../../../assets/evan.svg'
import Twitter from '../../../assets/twitter.svg'
export default function Topscore1(){
  return(
    <div className={style.root}>
    <div className={style.content1}>
    <div className= {style.box}>
    <img  src={Box} alt="box" />
    </div>
  </div>
  <div className={style.contents1}>
  <img className={style.evan} src={Evan} alt="" />
  <h1 className={style.text1}>Evan Lathi</h1>
  <h3 className={style.text2}>PC Gamer</h3>
  <h2 className={style.text3}>“One of my gaming highlights of the year.”</h2>
  <h5 className={style.text4}>October 18, 2018</h5>
  </div>
  <img className={style.twitter1} src={Twitter} alt="twitter" />  
    </div>

  )
}