import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { lbalbalba, alwdlaw } from './signInSchemes';

export const UniversalForm = props => {
  const { title, text, inputs, handleUserSubmit, button } = props;
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = values => {
    handleUserSubmit(values); 
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Formik
        initialValues={{
          name: '', 
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={inputs.length === 3 ? alwdlaw : lbalbalba}
      >
        {() => (
          <Form>
            {inputs.map(({name, label}) => (
              <div key={name}>
                {name === 'password'
                  ? <div>
                      <Field type={showPassword ? 'text' : name} id={name} name={name} autoComplete="on"/>
                      <button type="button" onClick={handleTogglePassword}>eye</button>
                    </div>
                  : <Field type={name} id={name} name={name} />}
                <label htmlFor={name}>{label}</label>
                <ErrorMessage name={name} component="div" className="error-message" />
              </div>
            ))}
            <button type="submit">{button}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
