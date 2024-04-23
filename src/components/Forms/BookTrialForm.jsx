import { Formik, Form, Field, ErrorMessage } from 'formik';
import { entryValidationSchema } from '../signInSchemes';
import { showSuccessToast } from '../ErrorMessages/errorMessages';

export const BookTrialForm = ({avatar_url, name, surname, setShowBookTrialForm}) => {
  const userInputs = [
    { name: 'name', type: 'text', label: 'Full Name' },
    { name: 'email', type: 'email', label: 'Email' },
    { name: 'phone', type: 'number', label: 'Phone number' },
  ];

  const userRadioInputs = [
    { value: 'career', text: 'Career and business' },
    { value: 'kids', text: 'Lesson for kids' },
    { value: 'abroad', text: 'Living abroad' },
    { value: 'exams', text: 'Exams and coursework' },
    { value: 'hobby', text: 'Culture, travel or hobby' },
  ];
  
  const handleSubmit = () => { 
    setShowBookTrialForm(false);
    showSuccessToast("Success! The teacher will contact you shortly to discuss further details.");
  }

  return (
    <div>
      <h2>Book trial lesson</h2>
      <p>Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs.</p>
      <div>
        <img src={avatar_url} alt={`${name} ${surname}`} width={44} height={44} />
        <p>Your teacher</p>
        <h3>{name} {surname}</h3>
      </div>
      <p>What is your main reason for learning English?</p>
      <Formik
        initialValues={{
          name: '', 
          email: '', 
          phone: '', 
          reason: 'career',
        }}
        onSubmit={handleSubmit}
        validationSchema={entryValidationSchema}
      >
        {() => (
          <Form>
            <div>
              {userRadioInputs.map(({value, text}) => (
                <label key={value}>
                  <Field type='radio' name='reason' value={value} />
                  {text}
                </label>
              ))}
            </div>
              {userInputs.map(({name, label, type}) => (
              <div key={name}>
                <Field type={type} id={name} name={name} autoComplete="on" required/>
                <label htmlFor={name}>{label}</label>
                <ErrorMessage name={name} component="div" className="error-message" />
              </div>
            ))}
            <button type="submit">Book</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};