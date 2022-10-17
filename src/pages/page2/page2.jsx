import React from "react";
import style from './page2.module.scss'
import Carousel from "../../components/carousel/carousel";

export default function Work(){
return(
  <div className={style.root}>
  <div className= {style.container}>
    <div className={style.content}>
      <h2 className={style.text1}>Whats so Special?</h2>
      <h1 className={style.text2}>THE GAMES</h1>
    </div>
    <div className={style.carousel}>
    <Carousel />
    </div>
  </div>
  </div>
 
)
}