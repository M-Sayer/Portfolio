import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import './Contact.css'
import { StyledButton } from '../components/StyledComponents';

const Contact = () => {

  function handleSubmit(values) {
    console.log(values)
  }

  function renderContactForm() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '', 
          message: '',
        }}
        validationSchema={yup.object({
          name: yup.string().required('Required'),
          email: yup.string().email('Invalid email address').required('Required'),
          message: yup.string().required('Required'),
        })}
        onSubmit={ (values) => {
          handleSubmit(values)
        }}
      >
        <Form className='contactForm'>
            <Field placeholder='name' name='name' type='text' />
            <ErrorMessage className='error-message' name='name' />
            <Field placeholder='email' name='email' type='text' />
            <ErrorMessage className='error-message' name='email' />
            <Field placeholder='message' name='message' type='text' />
            <ErrorMessage className='error-message' name='message' />
            <StyledButton primary type='submit'>Submit</StyledButton>
        </Form>
      </Formik>
    )
  }

  return (
    <div className='contact'>
      {renderContactForm()}
    </div>
  )
}

export default Contact;