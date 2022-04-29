import React from 'react';
import FormActivities from './FormActivities';
import { Formik } from 'formik';
import { formNewsValidationSchema } from './validationFormActivities';

const FormikNews = ({news}) => {
    console.log(news)
    const initialValues = {
        name : news?.name,
        content: news?.content
    }

    const formikHandleSubmit = async (props, addNew) => {
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
            return <FormActivities {...props}/>
            }}
    </Formik>
  )
}

export default FormikNews