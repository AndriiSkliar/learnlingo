import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <div>
      <nav>
        <Link to="/home">
          home
        </Link>
        <Link to="/login">
          login
        </Link>
        <Link to="/register">
          register
        </Link>
      </nav>
    </div>
  );
};