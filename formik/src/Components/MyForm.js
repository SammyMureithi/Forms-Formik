import React, { useState } from 'react'
import { Formik, Field, ErrorMessage, Form } from 'formik'
import TextError from './TextError'

function MyForm() {
    const [students, setStudents] = useState( [] )
    const initaialValues = {
        fullname: "",
        regNo: "",
        course: "",
        comments: "",
        social: {
            facebook: "",
            twitter:""
        }
    }
    const onSubmit = (values,{resetForm}) => {
        setStudents( prevStudents => [...prevStudents, values] )
        console.log(students)
        console.log( "New student add successfully" )
        resetForm({values:""})
    }
    const validate = values => {
        let error = {}
        if ( !values.fullname ) {
            error.fullname="Fullname is Required"
        }
        if ( !values.regNo ) {
            error.regNo="Registation number required"
        }
        if ( !values.course ) {
            error.course="Course name required"
        }
        if ( !values.comments ) {
            error.comments="Comments name required"
        }
        if ( !values.facebook ) {
            error.facebook="FaceBook handle Required"
        }
        if ( !values.twitter ) {
            error.twitter="Twitter handles Required"
        }
        return error
    }
  return (
      <div>
          <Formik
              initialValues={initaialValues}
              onSubmit={onSubmit}
              validate={validate}
          >
              <Form>
                  <label htmlFor='fullname'>FullName</label>
                  <ErrorMessage name="fullname" component={TextError} />
                  <Field
                      name="fullname"
                      id="fullname"
                      type="text"
                      placeholder="Enter Fullname" />
                  <label htmlFor='fullname'>Registation Number</label>
              <ErrorMessage name="regNo" component={TextError}/>
              <Field
                  name="regNo"
                  id="regNo"
                  type="text"
                  placeholder="Enter RegNumber"
              />
              <label htmlFor='fullname'>Course</label>
              <ErrorMessage name="course" component={TextError}/>
              <Field
                  name="course"
                  id="course"
                  type="text"
                  placeholder="Enter Course"
                  />
                  <label htmlFor='comments'>Comments</label>
                  <ErrorMessage name="comments" component={TextError}/>
                  <Field 
                      as="textarea"
                      name="comments"
                      placeholder="Little about you"
                  />
                   <label htmlFor='fullname'>FaceBook</label>
              <ErrorMessage name="facebook" component={TextError}/>
              <Field
                  name="facebook"
                  id="facebook"
                  type="text"
                  placeholder="Enter Facebook"
                  />
                   <label htmlFor='fullname'>Course</label>
              <ErrorMessage name="twitter" component={TextError}/>
              <Field
                  name="twitter"
                  id="twitter"
                  type="text"
                  placeholder="Enter Twitter "
                  />
                  <button type='submit'>Add Student</button>
              </Form>
              
          </Formik>
          
    </div>
  )
}

export default MyForm