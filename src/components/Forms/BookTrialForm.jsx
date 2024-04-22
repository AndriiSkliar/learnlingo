import { Formik, Form, Field, ErrorMessage } from 'formik';

export const BookTrialForm = ({avatar_url, name, surname}) => {

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
        }}
        // onSubmit={handleSubmit}
        // validationSchema={Schema}
      >
        {() => (
          <Form>
            <div>
              <Field type='text' id={name} name={name} autoComplete="on"/>
            </div>
              <label htmlFor={name}></label>
              <ErrorMessage name={name} component="div" className="error-message" />
            <button type="submit">Book</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};