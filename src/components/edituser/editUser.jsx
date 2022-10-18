import React from "react";
import style from '../edituser/editUser.module.scss'
export default function Edituser() {
  return(
    <div className={style.root}>
      <form className={style.form}>
      <div>
      <label className={style.label}>
    Name:
    <input className={style.input} type="text" name="name" />
      </label>
      <label className={style.label}>
    Email:
    <input className={style.input} type="email" name="email" />
      </label>
      <label className={style.label}>
    Password:
    <input className={style.input} type="password" name="password" />
      </label>
      <label className={style.label}>
    Repeat Password:
    <input className={style.input} type="password" name="repeatpassword" />
      </label>
      <input className={style.submit} type="submit" value="Submit" />
      </div>
      </form>
    </div>
  )
}
