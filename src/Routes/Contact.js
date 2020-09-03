import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';

import './Contact.css'
import { StyledButton } from '../components/StyledComponents';

const Contact = () => {
  const history = useHistory();

  function handleSubmit(values) {
    fetch('https://formspree.io/mbjzvebw', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(values)
    })

    history.push('/success')
    console.log('history pushed?')
  }

  function autoExpand(e) {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  }

  const expandingTextarea = (props) => (
    <textarea {...props} type='text' onChange={(e) => {
      props.onChange(e);
      autoExpand(e);
    }} />
  );

  function renderContactForm() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '', 
          message: '',
        }}
        validationSchema={yup.object({
          name: yup.string().required('kindly enter your name'),
          email: yup.string().email().required('hmm, are you sure that is your email address?'),
          message: yup.string().max(250).required('kindly leave a message'),
        })}
        onSubmit={ (values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form className='contactForm'>
            <ErrorMessage component='section' className='errorMessage' name='name' />
            <Field placeholder='name' name='name' type='text' />
            <ErrorMessage component='section' className='errorMessage' name='email' />
            <Field placeholder='email' name='email' type='text' />
            {errors.message && 
              <div className='errorMessage'>
                {errors.message}
              </div>
            }
            <Field name='message' as={expandingTextarea} placeholder='message' />
            <StyledButton primary lightHover type='submit'>Submit</StyledButton>
          </Form>
        )}
      </Formik>
    )
  }

  return (
    <div className='contact'>
      <h1>contact me</h1>
      {renderContactForm()}
    </div>
  )
}

export default Contact;