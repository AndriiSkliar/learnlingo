import * as Yup from 'yup';

export const lbalbalba = Yup.object().shape({
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

export const alwdlaw = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/[A-Za-z]+/, 'Name must contain at least one letter')
    .matches(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
  email: lbalbalba.fields.email,
  password: lbalbalba.fields.password,
});
