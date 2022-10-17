import React from "react";
import style from './footer.module.scss'
import facebook from '../../../assets/facebook.svg'
import twitter from '../../../assets/twitter.svg'
import youtube from '../../../assets/youtube.svg'
import twitch from '../../../assets/twitch.svg'
import { Link } from "react-router-dom";
import Border from '../../../assets/border.svg'

export default function Footer(){
  return(
    <div>
      <div className={style.content}>
        <div className={style.content1}>
          <Link to='/' className={style.contents1}>MAIN</Link>
          <Link to='/work' className={style.contents1}>about</Link>
          <Link to='/feature' className={style.contents1}>game features</Link>
          <Link to='/requirement' className={style.contents1}>System requirements</Link>
          <Link to='/topscore' className={style.contents1}>quotes</Link>
          <Link className={style.contents1}><img src={facebook} alt="facebook" /></Link>
          <Link className={style.contents1}><img src={twitter} alt="twitter" /></Link>
          <Link className={style.contents1}><img src={youtube} alt="youtube" /></Link>
          <Link className={style.contents1}><img src={twitch} alt="twitch" /></Link>
        </div>
        <div className={style.content2}>
          <img className={style.border} src={Border} alt="border" />
        </div>
        <div className={style.content3}>
          <h1 className={style.contents3}> © 2018 Your Games, Inc. All Rights Reserved</h1>
          <h1 className={style.contents31}>Privacy Policy | Terms of Services | Code of Conduct </h1>
        </div>
      </div>
    </div>
  )
}