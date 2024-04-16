import { Link } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";
import { Login } from "../components/Login";
import { SignUp } from "../components/SignUp";

const HomePage = () => {
  return (
    <>
      <p>Welcome!</p>
      <p>Go to the <Link to="/teachers">teachers</Link></p>
      {/* <Login/> */}
      {/* <SignUp /> */}
      {/* <Auth/> */}
    </>
  )
}

export default HomePage;
