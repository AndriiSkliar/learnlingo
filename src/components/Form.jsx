import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export const UniversalForm = ({ title, text, inputs, onSubmit }) => {
  const validationSchema = Yup.object().shape({
      // name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <Formik
        initialValues={{
          email: '',
          password: '',
        //   name: '', 
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            {inputs.map((input) => (
              <div key={input.name}>
                <Field type={input.type} id={input.name} name={input.name} />
                <label htmlFor={input.name}>{input.label}</label>
              </div>
            ))}
            <button type="submit">Submit</button>
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