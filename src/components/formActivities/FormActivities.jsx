import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Form from './Form';
import { Formik } from 'formik';
import { formEditActivitiesValidationSchema } from './validationEditFormActivities';
import { formActivitiesValidationSchema } from './validationFormActivities';
import { error, info } from "../../services/alertService";
import { get, post, put } from "../../services/apiService";

const FormActivities = () => {

    const [ activity, setActivity ] = useState({});
    const { id } = useParams();
    const errorMessage = {
        title: "An error occurred. Try again."
    }
    let url = `/activities/`;

    useEffect( () => {
        const fetchActivitiesData = async (url, param, errorMessage) => {

            try {
                url += param
                const response = await get(url)
                if(response.status === 200) {
                    setActivity(response.data)
                }
                
            } catch (error) {
                return {error, ...errorMessage}
            }
        }

        if( id ) {
            fetchActivitiesData(url, id);
        }
    }, [])

    const formikHandleSubmit = async (url, param = undefined, addNew, errorMessage) => {
        
        if (param) {
            //update
            try {
                url += param;
                let data = { ...addNew }

                const response = await put(url, data)
                
                if (response?.status === 200) {
                    data = {
                        title: response.data.msg || "Activity updated successfully."
                    }
                    info(data.title)
                    return
                }

                data = {
                    title: "Failed. Try again."
                }
                return error(data)

            } catch (err) {
                
                error(errorMessage)
                return {err, ...errorMessage}
            }
        } else {
            //insert
            try {

                let response = await post(url, {
                    ...addNew
                })

                if (response?.status === 200) {
                    const data = {
                        text: response.data.msg
                    }
                    return info(data)
                }

            } catch (err) {
                error(errorMessage)
                return {err, ...errorMessage}
            }
        }
    }

  return (
    <Formik 
        initialValues= { activity }
        validationSchema={!id ? formActivitiesValidationSchema : formEditActivitiesValidationSchema}
        onSubmit= {(values) => formikHandleSubmit(url, id, values, errorMessage)}
    >
        {props => {
            console.log(props)
            return <Form {...props} activity = { {...activity} } param = { id } />
            }}
    </Formik>
  )
}

export default FormActivities