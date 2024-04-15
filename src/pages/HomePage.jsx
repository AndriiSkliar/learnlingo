import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { removeUser } from '../redux/auth/auth.reducer';
import { useAuth } from '../hooks/use-auth';

const HomePage = () => {
  return <p>Welcome!</p>
  // const dispatch = useDispatch();

  //   const {isAuth, name="user"} = useAuth();

  //   return isAuth ? (
  //       <div>
  //         <p>Welcome, {name}</p>

  //           <button
  //               onClick={()=> dispatch(removeUser())}
  //           >Log out from {email}</button>
  //       </div>
  //   ) : (
  //   <Navigate to="/login"/>
  // );
};

export default HomePage;
