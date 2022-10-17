import React from 'react'
import Home from '../../components/home/home'
import style from './index.module.scss'
export default function Index() {
  return (
    <div className={style.root}>
      <Home />
    </div>
  )
}