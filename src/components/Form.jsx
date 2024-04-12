import { Formik, Form, Field } from "formik";

export const FormLogin = ({onSubmit}) => (
    <Formik
      initialValues={{ userEmail: "", userPassword: "" }}
      onSubmit={onSubmit}
    >
    <div className="container">
      <Form >
        <div>
          <Field
            id="login-email"
            placeholder="Email"
            type="email"
            name="userEmail"
            autoComplete="on"
            autoFocus
            required
          />
          <label htmlFor="login-email">Email</label>
        </div>
        <div >
          <Field
            id="login-password"
            placeholder="Password"
            type="password"
            name="userPassword"
            autoComplete="on"
            required
            minLength={7}
          />
          <label htmlFor="login-password">Password</label>
        </div>
        <button type="submit">Sign In</button>
      </Form>
    </div>
  </Formik>
);