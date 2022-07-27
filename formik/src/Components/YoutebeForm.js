import React, { useState } from 'react'
import { Form, Formik, Field, ErrorMessage,FieldArray } from 'formik'
import TextError from './TextError'

function YoutebeForm() {
    const [users, setUsers] = useState([])
    const initialValues = {
        name: "",
        email: "",
        channel: "",
        comments: "",
        social:{
            facebook: "",
            twitter:""
        },
        phoneNumbers: ["", ""],
        phNumber:['']
    }
    const onSubmit =( values,{resetForm}) => {
        setUsers( prevUsers => ( [...prevUsers, values] ) )
        console.log( values )
        console.log(users)
        resetForm({values:""})
    }
    const validate = (values) => {
        let error = {}
        if ( !values.name ) {
            error.name="Required!😠"
        }
        if ( !values.email) {
            error.email = "Required!😠"
            
        } else if ( !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(values.email)) {
            error.email="Invalid Email Format"
        }

        if ( !values.channel  ) {
            error.channel="Required!😠"
        }
        if ( !values.comments  ) {
            error.comments="Required!😠"
        }
        if ( !values.social.facebook ) {
            error.facebook="FaceBook handle Required"
        }
        if ( !values.social.twitter ) {
            error.twitter="Twitter handles Required"
        }
        return error
    }
  return (
      <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
      >
          <Form >
              <label htmlFor='name'>Name</label>
              <ErrorMessage name="name"  component={TextError}/>
              <Field
                  type="text"
                  id='name'
                  name="name"
                  />
             
              <label htmlFor='email'>Email</label>
              <ErrorMessage name="email"  component={TextError} />
              <Field type="email"
                  id='email'
                  name="email"
                  />
                
              <label htmlFor='channel'>Channel</label>
              <ErrorMessage name="channel"  component={TextError}/>
              <Field
                  type="text"
                  id='channel'
                  name="channel"
              />
               <label htmlFor='comments'>Coments</label>
              <ErrorMessage name="comments"  component={TextError}/>
              <Field
                  as="textarea"
                  type="text"
                  id='comments'
                  name="comments"
              />
              <label htmlFor='social.facebook'>FaceBook</label>
              <Field type="text"
                  id='facebook'
                  name="social.facebook"
                  />
              <label htmlFor='social.twitter'>Twitter</label>
              <ErrorMessage name="social.twitter"  component={TextError}/>
              <Field
                  name="social.twitter"
                  id="twitter"
                  type="text"
                 
              />
                    <label htmlFor='primaryPh'>Primary Phone number</label>
              <ErrorMessage name="primaryPh" component={TextError}/>
              <Field
                  name="phoneNumbers[0]"
                  id="primaryPh"
                  type="text"
                  
              />
                    <label htmlFor='secondaryPh'>Secondry Phone number</label>
              <Field
                  name="phoneNumbers[1]"
                  id="secondaryPh"
                  type="text"
              />
              <FieldArray name="phNumber">
                  {
                      ( fieldArrayProps ) => {
                          const { push, remove, form } = fieldArrayProps
                          const { values } = form
                          const { phNumber } = values
                          return (
                              <div>
                                  {phNumber.map((phNumber, index ) => (
                                      <div key={index}>
                                          <Field name={`phNumber[${index}]`} />
                                          <button type='button' onClick={() => remove( index )}>-</button>
                                          <button type='button' onClick={() => push('')}>+</button>
                                      </div>
                                  ))}
                              </div>
                          )
                      }
                  }
              </FieldArray>
                  <button type='submit'>Submit</button>
              </Form>          
    </Formik>
  )
}

export default YoutebeForm