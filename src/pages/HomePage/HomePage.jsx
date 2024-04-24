import { nanoid } from "nanoid";
import { Link } from "react-router-dom";
import css from './HomePage.module.css';

const HomePage = () => {
  const tutorDetails = [
    { value: '32,000 +', details: 'Experienced tutors' },
    { value: '300,000 +', details: '5-star tutor reviews' },
    { value: '120 +', details: 'Subjects taught' },
    { value: '200 +', details: 'Tutor nationalities' },
  ];
  
  return (
    <main>
      <div className={css.heroWrp}>
        <div className={css.heroDesc}>
          <h1 className={css.heroTitle}>Unlock your potential with the best <span className={css.heroSmall}>language</span> tutors</h1>
          <p className={css.heroText}>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <Link className={css.heroLink} to="/teachers">Get started</Link>
        </div>
        <div>
          <img src="/hero.jpg" alt="girl with notebook" width={568} height={530}/>
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
