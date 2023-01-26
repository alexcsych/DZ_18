import { Formik, Form } from 'formik';
import React from 'react';
import { LOGIN_VALIDATION_SCHEMA } from '../../../utils/validate/validationSchemas';
import Input from '../Input';
import styles from './LoginForm.module.sass';

function LoginForm () {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const handleSubmit = (values, formikBag) => {
    console.log('Submit form with values:', values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <Input
          label='Name:'
          type='text'
          name='firstName'
          placeholder='First name'
          autoFocus
          classes={classes}
        />
        <Input
          label='Name:'
          type='text'
          name='lastName'
          placeholder='Last name'
          classes={classes}
        />
        <Input
          label='Email:'
          type='email'
          name='email'
          placeholder='your@mail.com'
          classes={classes}
        />
        <Input
          label='Password:'
          type='password'
          name='password'
          classes={classes}
        />
        <Input
          label='Password:'
          type='password'
          name='passwordConfirmation'
          classes={classes}
        />
        <button type='submit'>Save</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
