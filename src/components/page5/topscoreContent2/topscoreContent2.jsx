import React from "react";
import style from './topscoreContent2.module.scss'
import Box from '../../../assets/Rectangle 21.svg'
import Jada from '../../../assets/jada.svg'
import Twitter from '../../../assets/twitter.svg'
export default function Topscore1(){
  return(
    <div className={style.root}>
    <div className={style.content2}>
    <div className= {style.box}>
    <img  src={Box} alt="box" />
    </div>
  </div>
  <div className={style.contents2}>
  <img className={style.jada} src={Jada} alt="" />
  <h1 className={style.text1}>Jada Griffin </h1>
  <h3 className={style.text2}>Nerdreactor</h3>
  <h2 className={style.text3}>“The next big thing in the world of <br /> streaming and survival games.”</h2>
  <h5 className={style.text4}>December 21, 2018</h5>
  </div>
  <img className={style.twitter1} src={Twitter} alt="twitter" />  
    </div>

  )
}