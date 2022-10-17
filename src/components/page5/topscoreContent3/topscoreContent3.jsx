import React from "react";
import style from './topscoreContent3.module.scss'
import Box from '../../../assets/Rectangle 21.svg'
import Aaron from '../../../assets/aaron.svg'
import Twitter from '../../../assets/twitter.svg'
export default function Topscore3(){
  return(
    <div className={style.root}>
    <div className={style.content2}>
    <div className= {style.box}>
    <img  src={Box} alt="box" />
    </div>
  </div>
  <div className={style.contents2}>
  <img className={style.aaron} src={Aaron} alt="" />
  <h1 className={style.text1}>Aaron Williams </h1>
  <h3 className={style.text2}>Uproxx</h3>
  <h2 className={style.text3}>“Snoop Dogg Playing The Wildly Entertaining <br /> ‘SOS’ Is Ridiculous.”</h2>
  <h5 className={style.text4}>December 24, 2018</h5>
  </div>
  <img className={style.twitter1} src={Twitter} alt="twitter" />  
    </div>

  )
}