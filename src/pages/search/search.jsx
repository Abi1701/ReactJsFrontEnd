import React,{useState, useEffect}from 'react';
import style from './search.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
 
export default function  Search() {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [query, setQuery] = useState("");
  const keys = ["nama", "email", "experience"];
    const search = (data) => {return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(query))
      );
    };
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
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return(
    <>
    <div className={style.root}>
      <h1>Players</h1>
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <table className={style.table}>
        <thead>
          <th value='id' className={style.thead}>Id</th>
          <th value='nama' className={style.thead}>Name</th>
          <th value='email' className={style.thead}>Email</th>
          <th value='experience' className={style.thead}>Experience</th>
          <th value='' className={style.thead}>Actions</th>
        </thead>
        <tbody>
              <tr  className={style.trbody}>
                <th className={style.tbody}>1</th>
                {profile === null ? (
                  <th className={style.tbody}>Name</th>
        ) : (
          <>
                  <th className={style.tbody}>{profile.nama}</th>
                  <th className={style.tbody}>{profile.email}</th>
                  <th className={style.tbody}>{profile.saldo}</th>
                  <th className={style.button} onClick={() => toggleModal()}>Edit User</th>
          </>
        )}
              </tr>
        </tbody>
      </table>
      {modal && (
        <div className={style.modal}>
          <div onClick={toggleModal} className={style.overlay}></div>
          <div className={style.modalContent}>
          <div className={style.roots}>
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
            <button className={style.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}