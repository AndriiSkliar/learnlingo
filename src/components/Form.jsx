import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { schema, specSchema } from './schema';

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
        validationSchema={inputs.length === 3 ? specSchema : schema}
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