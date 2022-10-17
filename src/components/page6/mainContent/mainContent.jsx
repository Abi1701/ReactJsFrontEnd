import React from "react";
import style from './mainContent.module.scss'
import Statue from '../../../assets/statue.svg'
import { Link } from "react-router-dom";
import { useState } from "react";


export default function MainContent(){
  const [name, setName] = useState("");
  return(
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
  )
}