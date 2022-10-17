import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import style from './header.module.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'

export default function Header() {
  const [profile, setProfile] = useState(null)
 

  useEffect(() => {
    getProfile()
  }, [])
  const getProfile = async () => {
    try {
      const { data } = await axios.get('/user/profile')
      setProfile(data)
    } catch (error) {
      setProfile(null)
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('_q')
    window.location.reload()
  }
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate('/apps/search')}
  return (
   <header className={style.root}>
    
    <div className={style.divLink}>
      <img className={style.logo} src={logo} alt="logo" />
      <Link to='/' className={style.link}>HOME</Link>
      <Link to='/apps/work' className={style.link}>GAME</Link>
      <Link to='/apps/feature' className={style.link}>FEATURE</Link>
      <Link to='/apps/requirement' className={style.link}>REQUIREMENT</Link>
      <Link to='/apps/score' className={style.link}>SCORE</Link>
      <Link to='/apps/subscribe' className={style.link}>SUBSCRIBE</Link>
    </div>
    <div className={style.auth}>
        {profile === null ? (
          <Link to='/auth/login' className={style.link}>
            Sign In
          </Link>
        ) : (
          <>
            <span className={style.nama} onClick={handleSearch}>{profile.nama}</span>
            <span className={style.logout} onClick={handleLogout}>
              Logout
            </span>
          </>
        )}
      </div>
   </header>
    )
}