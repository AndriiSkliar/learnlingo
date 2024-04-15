import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string()
    .required('Name is required')
    .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
    email: Yup.string()
    .matches(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Emails: digits, letters, . - _ only, e.g., example@mail.com.'
    )
    .email('Invalid email format, example@mail.com')
    .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters long')
      .required('Password is required. Example:Password123')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number'),
  });

export const UniversalForm = props => {
  const { title, text, inputs, handleUserSubmit, button  } = props;
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
        validationSchema={schema}
      >
        {() => (
          <Form>
            {inputs.map(({name, label}) => (
              <div key={name}>
                {name === 'password'
                  ? <div>
                      <Field type={showPassword ? 'text' : name} id={name} name={name} />
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


// import { Formik, Form, Field } from "formik";

// export const FormLogin = ({onSubmit}) => (
//     <Formik
//       initialValues={{ userEmail: "", userPassword: "" }}
//       onSubmit={onSubmit}
//     >
//     <div className="container">
//       <Form >
//         <div>
//           <Field
//             id="login-email"
//             placeholder="Email"
//             type="email"
//             name="userEmail"
//             autoComplete="on"
//             autoFocus
//             required
//           />
//           <label htmlFor="login-email">Email</label>
//         </div>
//         <div >
//           <Field
//             id="login-password"
//             placeholder="Password"
//             type="password"
//             name="userPassword"
//             autoComplete="on"
//             required
//             minLength={7}
//           />
//           <label htmlFor="login-password">Password</label>
//         </div>
//         <button type="submit">Sign In</button>
//       </Form>
//     </div>
//   </Formik>
// );