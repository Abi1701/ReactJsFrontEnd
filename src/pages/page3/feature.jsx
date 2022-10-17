import React from "react";
import style from './feature.module.scss'
import Dot from '../../assets/Ellipse 1.svg'
import Bar from '../../assets/progress bar.svg'
import Dot1 from '../../assets/Ellipse.svg'
export default function Feature(){
  return(
    <div className={style.root}>
      <div className={style.container}>
        <div className={style.text1}>
        <h4 className={style.content1}>whats so Special?</h4>
        <h1 className={style.content2}>FEATURES</h1>
        </div>
        <div className={style.text2}>
        <img className={style.content3} src={Dot} alt="dot" />
        <h2 className={style.content4}>Traditional Games</h2>
        </div>
        <div>
        <h3 className={style.contents4}>If you miss your childhood,<br /> we provide many traditional games here</h3>
        </div>
        <div>
        <img className={style.content5} src={Bar} alt="bar" />
        </div>
        <div className={style.text3}>
          <img src={Dot1} alt="dot1" />
          <h2 className={style.content6}> GAME SUIT </h2>
        </div>
        <div className={style.text3}>
          <img src={Dot1} alt="dot1" />
          <h2 className={style.content6}> TBD </h2>
        </div>
      </div>
    </div>
  )
}