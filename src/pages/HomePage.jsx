import { Link } from "react-router-dom";
import { Auth } from "../components/Auth/Auth";

const HomePage = () => {
  return (
    <>
      <p>Welcome!</p>
      <p>Go to the <Link to="/teachers">teachers</Link></p>
      {/* <Auth/> */}
    </>
  )
}

export default HomePage;
