import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/auth/auth.reducer';
import { Modal } from '../Modal/Modal';
import { SignUp } from "../SignUp";
import { Login } from "../Login";
import Logo from '../Logo/Logo';

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  
  const handleClick = async () => { 
    const auth = getAuth();
    dispatch(removeUser());
    await signOut(auth);
  }

  useEffect(() => { 
    if (isAuth) { 
      setShowLoginPopup(false);
      setShowRegisterPopup(false);
    }
  },[isAuth])

  return (
    <div>
      <Logo/>
      <nav>
        <NavLink to="/home">
          Home
        </NavLink>
        <NavLink to="/teachers">
          Teachers
        </NavLink>
        {isAuth ?
          <NavLink to="/favorites">
            Favorites
          </NavLink> : null}
      </nav>
      <div>
        {isAuth
          ? <>
            <span>{name}</span>
            <button onClick={handleClick}>Log out</button>
            </>
          : <>
            <button type='button' onClick={() => setShowLoginPopup(true)}>Log in</button>
            <button type='button' onClick={() => setShowRegisterPopup(true)}>Registration</button>
          </>}
      </div>
      {showLoginPopup && <Modal setIsShowModal={setShowLoginPopup}><Login/></Modal>}
      {showRegisterPopup && <Modal setIsShowModal={setShowRegisterPopup}><SignUp/></Modal>}
    </div>
  );
};