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
          type='text'
          name='firstName'
          placeholder='First name'
          autoFocus
          classes={classes}
        />
        <Input
          type='text'
          name='lastName'
          placeholder='Last name'
          classes={classes}
        />
        <Input
          type='email'
          name='email'
          placeholder='your@mail.com'
          classes={classes}
        />
        <Input
          type='text'
          name='password'
          placeholder='Password'
          classes={classes}
        />
        <button type='submit'>Save</button>
      </Form>
    </Formik>
  );
}

export default LoginForm;
