import React from "react";
import style from './subscribe.module.scss'
import Statue from '../../assets/statue.svg'
import { Link } from "react-router-dom";
import { useState } from "react";
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import youtube from '../../assets/youtube.svg'
import twitch from '../../assets/twitch.svg'
import Border from '../../assets/border.svg'

export default function Subscribe(){
  const [name, setName] = useState("");
  return(
    <div className={style.root}>
    <div className={style.root}>
      <img className={style.statue} src={Statue} alt="statue" />
      <div className={style.container}>
        <div className={style.midcontent}>
        <div>
          <h1 className={style.midcontent1}>Want to stay in touch?</h1>
          <h1 className={style.midcontent2}>newsletter <br /> SUBSCRIBE </h1>
          <h1 className={style.midcontent3}>In order to start receiving our news, all you have to do is enter your email address. <br /> Everything else will be taken care of by us. We will send you emails <br /> containing information about game. We don’t spam.</h1>
          <form> 
          <input placeholder="Enter Your Mail" className={style.form} type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </form>
          <Link to='/auth' className={style.button}>Subscribe now</Link>        
        </div>
        </div>
      </div>
    </div>
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