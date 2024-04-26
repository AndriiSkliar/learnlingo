import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase";
import { setUser } from '../../redux/auth/auth.reducer';
import { nanoid } from "nanoid";
import girl from '../../assets/img/hero.png';
import girlRet from '../../assets/img/hero.webp';
import girl2x from '../../assets/img/hero@2x.png';
import girlRet2x from '../../assets/img/hero@2x.webp';
import css from './HomePage.module.css';


const HomePage = () => {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  const tutorDetails = [
    { value: '32,000 +', details: 'Experienced tutors' },
    { value: '300,000 +', details: '5-star tutor reviews' },
    { value: '120 +', details: 'Subjects taught' },
    { value: '200 +', details: 'Tutor nationalities' },
  ];

  useEffect(() => { 
    auth.onAuthStateChanged((maybeUser) => { 
      if (maybeUser !== null) { 
        dispatch(setUser({
          name: maybeUser.displayName,
          email: maybeUser.email,
          id: maybeUser.uid,
          token: maybeUser.accessToken,
        }));
      }
    })
  }, [auth])
  
  return (
    <main>
      <div className={css.heroWrp}>
        <div className={css.heroDesc}>
          <h1 className={css.heroTitle}>Unlock your potential with the best <span className={css.heroSmall}>language</span> tutors</h1>
          <p className={css.heroText}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <Link className={css.heroLink} to="/teachers">Get started</Link>
        </div>
        <div>
          <img srcSet={`${girlRet} 1x, ${girlRet2x} 2x, ${girl} 1x, ${girl2x} 2x`} src={girl} alt="girl with notebook" />
        </div>
      </div>
      <ul className={css.heroList}>
        {tutorDetails.map(({value, details}) => (
          <li className={css.heroItem} key={nanoid()}>
            <p className={css.heroTotal}>{value}</p>
            <p className={css.heroBenefits}>{details}</p>
          </li>
          ))}
      </ul>
    </main>
  )
}

export default HomePage;
