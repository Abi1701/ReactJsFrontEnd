import React from 'react'
import style from '../home/home.module.scss'
import { Link } from 'react-router-dom'
export default function Home() {
  
  return (
    <div className={style.hero}>
      <h1 className={style.textHero}>Play Traditional Game</h1>
      <h3 className={style.describeHero}>
        Experience new traditional game play
      </h3>
     <Link to='/apps/room' className={style.button}>GAME</Link>
    </div>
  )
}