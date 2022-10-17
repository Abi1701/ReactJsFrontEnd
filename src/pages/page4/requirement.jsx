import React from "react";
import style from './requirement.module.scss'
import Box from '../../assets/Vector 2.svg'
import Bar from '../../assets/Vector 3.svg'
import MidBar from '../../assets/Vector 5.svg'

export default function Requirement(){
  return(
    <div className={style.root}>
      <div className={style.content1}>
        <h1 className={style.contents11}>system <br /> requirements</h1>
        <h4 className={style.contents12}>Can My Computer Run this game?</h4>
        </div>
        <div className={style.bordered}>
        <img className={style.box} src={Box} alt="box" />
        <div className={style.topcontent}>
        <div className={style.content2}>
          <h1 className={style.contents21}>OS:</h1>
          <h3 className={style.contents22}>Windows 7 64-bit only <br /> (No OSX support at this time)</h3>
        </div>
        <div className={style.content3}>
          <h1 className={style.contents21}>PROCESSOR:</h1>
          <h3 className={style.contents22}>Intel Core 2 Duo <br /> @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</h3>
        </div>
        </div>
        <img className={style.Bar} src={Bar} alt="bar" />
        <img className={style.MidBar} src={MidBar} alt="" />
        <div className={style.midcontent}>
        <div className={style.content4}>
          <h1 className={style.contents21}>mEMORY:</h1>
          <h3 className={style.contents22}>4 GB RAM</h3>
        </div>
        <div className={style.content5}>
          <h1 className={style.contents21}>storage:</h1>
          <h3 className={style.contents22}>8 GB available space</h3>
        </div>
        </div>
        <img className={style.Bar1} src={Bar} alt="bar" />
        <div className={style.bottomcontent}>
        <div className={style.content6}>
          <h1 className={style.contents21}>GRAPHICS:</h1>
          <h3 className={style.contents22}>NVIDIA GeForce GTX 660 2GB or <br /> AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)</h3>
        </div>
        </div>
        </div>
    </div>
  )
}