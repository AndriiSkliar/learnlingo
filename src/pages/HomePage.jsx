// import { Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux'
// import { removeUser } from '../redux/auth/auth.reducer';
// import { useAuth } from '../hooks/use-auth';

import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

const HomePage = () => {
  return (
    <>
      <p>Welcome!</p>
      <Login/>
      <SignUp/>
    </>
  )
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
