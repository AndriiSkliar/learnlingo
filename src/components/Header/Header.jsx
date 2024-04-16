import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from '../../hooks/use-auth';
import { removeUser } from '../../redux/auth/auth.reducer';
import Logo from '../Logo/Logo';

export const Header = () => {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();
  
  const handleClick = async () => { 
    const auth = getAuth();
    dispatch(removeUser());
    await signOut(auth);
  }

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
        <NavLink to="/favorites">
          Favorites
        </NavLink>
      </nav>
      <div>
        {isAuth
          ? <>
            <span>{name}</span>
            <button onClick={handleClick}>Log out</button>
            </>
          : <>
            <button type='button'>Log in</button>
            <button type='button'>Registration</button>
          </>}
      </div>
    </div>
  );
};