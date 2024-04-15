import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

export const Header = () => {

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
        <button type='button'>
          Log in
        </button>
        <button type='button'>
          Registration
        </button>
      </div>
    </div>
  );
};