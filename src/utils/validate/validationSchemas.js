import * as yup from 'yup';

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().trim().min(2).max(64).required(),
  lastName: yup.string().trim().min(2).max(64).required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8)
    .max(20)
    .matches(/^(?=.*[A-Z].*)$/, 'Password must contain an uppercase letter')
    .matches(/^(?=.*[a-z].*)$/, 'Password must contain an lowercase letter')
    .matches(/^(?=.*\d.*)$/, 'Password must contain numbers')
    .matches(
      /^(?=.*[!@#$%^&*].*)$/,
      'Password must contain special character(!@#$%^&*)'
    )
    .required(),
  passwordConfirmation: yup
    .string()
    .min(8)
    .max(20)
    .matches(/^(?=.*[A-Z].*)$/, 'Password must contain an uppercase letter')
    .matches(/^(?=.*[a-z].*)$/, 'Password must contain an lowercase letter')
    .matches(/^(?=.*\d.*)$/, 'Password must contain numbers')
    .matches(
      /^(?=.*[!@#$%^&*].*)$/,
      'Password must contain special character(!@#$%^&*)'
    )
    .required(),
});
