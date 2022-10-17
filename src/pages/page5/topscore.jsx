import React from "react";
import style from './topscore.module.scss'
import Topscore1 from "../../components/page5/topscoreContent/topscoreContent1";
import Topscore2 from "../../components/page5/topscoreContent2/topscoreContent2";
import Topscore3 from "../../components/page5/topscoreContent3/topscoreContent3";
import MainContent from "../../components/page5/maincontent/mainContent";

export default function Topscore(){
  return(
    <div className={style.root}>
      <div className={style.content}>
        <MainContent />
      </div>
      <div className={style.player}>
      <Topscore1 />
      <Topscore2 />
      <Topscore3 />
      </div>
      </div>

  )
}