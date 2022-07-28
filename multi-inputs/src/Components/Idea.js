import { Formik,Form,Field,FieldArray } from 'formik'
import React, { useState } from 'react'

function MyIdea() {
    const [purchase, setPurchases] = useState( [] )
    const initialValues = {
        suppliers_name: "",
        suppliers_phNumber: "",
        products:
            [{
                product_name: "",
                product_price: "",
                product_quantity: ""
            },
            ]
        
    }
    const validate = values => {
        let error = {}
        if ( !values.suppliers_name ) {
            error.suppliers_name="Required"
        }
        if ( !values.suppliers_phNumber ) {
            error.suppliers_phNumber="Required"
        }
        if ( !values.products.product_name ) {
            error.product_name="Required"
        }
        if ( !values.products.product_price ) {
            error.product_price="Required"
        }
        if ( !values.products.product_quantity ) {
            error.product_quantity="Required"
        }
    }
    const onSubmit = (values,{resetForm}) => {
        setPurchases( prevPurchases => ( [...prevPurchases, values] ) )
        resetForm({values:""})
        console.log(values)
    }
  return (
      <div>
          <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validate={validate}
          >
              <Form>
                  <label htmlFor='suppliers_name'>Suppliers Name</label>
                  <Field
                      id="suppliers_name"
                      name="suppliers_name"
                      type="text"
                  />
                  <label htmlFor='suppliers_phNumber'>Suppliers PhoneNumber</label>
                  <Field
                      id="suppliers_phNumber"
                      name="suppliers_phNumber"
                      type="text"
                  />
                  <FieldArray name='products'>
                      {
                          ( fieldArrayProps ) => {
                              const { remove, form, push } = fieldArrayProps
                              const { initialValues } = form
                              const {products}=initialValues
                              //const {product_name,product_price,product_quantity}=products
                           //   console.log(products[1].product_name)
                              return (
                                  <div>
                                      {products.map((products, index ) => (
                                          <div key={index}>
                                              <div>
                                              <h1>{`Product ${[index+1]}`}</h1>
                                               <label htmlFor={`products.${index}.product_name`}>Product Name</label>
                                               <Field name={`products.${index}.product_name`} id="product_name"/><br></br><br></br>
                                              <label htmlFor={`products.${index}.product_price`}>Product Price</label>
                                              <Field name={`products.${index}.product_price`} id="product_price" /><br></br><br></br>
                                              <label htmlFor={`products.${index}.product_quantity`}>Product Quantity</label>
                                              <Field name={`products.${index}.product_quantity`} id="product_quantity" /><br></br><br></br>
                                              </div>
                                              <button type='button' onClick={() =>remove(index)}>Remove</button>
                                              <button type='button'
                                                  onClick={() => push([{product_name: "", product_price: "", product_quantity:""}])}
                                              >Add Products</button>
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
    </div>
  )
}

export default MyIdea