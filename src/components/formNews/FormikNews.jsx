import React from 'react';
import FormNews from './FormNews';
import { Formik } from 'formik';
import { formNewsValidationSchema } from './formNewsValidation';

const FormikNews = ({news}) => {
    console.log(news)
    const initialValues = {
        title : news?.title,
        category: news?.category,
        image: news?.image,
        content: news?.content
    }

    const formikHandleSubmit = async (props, addNew) => {
        console.log(addNew)
        if(props) {
            //update
            console.log("update")
        } else {
            //insert
            console.log("insert")
        }
    }

  return (
    <Formik 
        initialValues= { initialValues }
        validationSchema={formNewsValidationSchema}
        onSubmit= {(values) => formikHandleSubmit(news, values)}
    >
        {props => {
            console.log(props)
            return <FormNews {...props}/>
            }}
    </Formik>
  )
}

export default FormikNews