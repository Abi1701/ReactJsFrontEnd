import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './room.module.scss'



export default function Room() {
  const navigate = useNavigate()
  const handleRoom = () => {
    navigate('/apps/game/:id')
  }
  return (
    <div className={style.root}>
      <h1>Select Room before Join Game</h1>
      <table className={style.table}>
        <thead>
          <th className={style.thead}>Id</th>
          <th className={style.thead}>Name</th>
          <th className={style.thead}>Player</th>
          <th className={style.thead}>Actions</th>
        </thead>
        <tbody>
              <tr className={style.trbody}>
                <th className={style.tbody}>1</th>
                <th className={style.tbody}>Room</th>
                <th className={style.tbody}>2/2</th>
                <th className={style.tbody}>
                  <button
                    className={style.button}
                    onClick={() => handleRoom()}>
                    Join
                  </button>
                </th>
              </tr>
        </tbody>
      </table>
    </div>
  )
}