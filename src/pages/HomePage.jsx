import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

const HomePage = () => {
  const tutorDetails = [
    { value: '32,000 +', details: 'Experienced tutors' },
    { value: '300,000 +', details: '5-star tutor reviews' },
    { value: '120 +', details: 'Subjects taught' },
    { value: '200 +', details: 'Tutor nationalities' },
  ];
  
  return (
    <main>
      <div>
        <div>
          <h1>Unlock your potential with the best <span>language</span> tutors</h1>
          <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <span><Link to="/teachers">Get started</Link></span>
        </div>
        <div>
          {/* <img src="" alt="" /> */}
        </div>
      </div>
      <ul>
        {tutorDetails.map(({value, details}) => (
          <li key={nanoid()}>
            <p>{value}</p>
            <p>{details}</p>
          </li>
          ))}
      </ul>
    </main>
  )
}

export default HomePage;
