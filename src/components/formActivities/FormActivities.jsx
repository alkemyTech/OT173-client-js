import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Basic from './Basic';
import { Formik } from 'formik';
import { formEditActivitiesValidationSchema } from './validationEditFormActivities';
import { formActivitiesValidationSchema } from './validationFormActivities';
import axios from 'axios';
import { error, info } from "../../services/alertService";

const FormActivities = () => {
    const [ activity, setActivity ] = useState({});
    const { id } = useParams();

    const url = `http://localhost:3001/activities/${id}`;

    useEffect( () => {
        const fetchActivitiesData = async (url) => {

            try {
                const response = await axios.get(url)
                if(response.status === 200) {
                    setActivity(response.data)
                }
                
            } catch (error) {
                console.log(error)
            }
        }

        if( id ) {
            fetchActivitiesData(url);
        }
    }, [])

    const formikHandleSubmit = async (param = undefined, addNew) => {
        console.log("PARAM ", param)
        if (param) {
            //update
            console.log("update")
            try {
                const url = `http://localhost:3001/activities/${param}`;
                let data = { ...addNew }

                const response = await axios.put(url, data)
                console.log(response)
                if (response?.status === 200) {
                    data = {
                        title: response.data.msg
                    }
                    return info(data)
                }

                data = {
                    title: "Failed. Try again."
                }
                return error(data)

            } catch (err) {
                const msg = {
                    title: "An error occurred. Try again."
                }
                error(msg)
                console.log(err)
            }
        } else {
            //insert
            try {

                let response = await axios.post("http://localhost:3001/activities", {
                    ...addNew
                })

                if (response?.status === 200) {
                    const data = {
                        title: response.data.message
                    }
                    return info(data)
                }

            } catch (err) {
                console.log(err)
                return error({ title: "An error occurred. Try again." })
            }
        }
    }

  return (
    <Formik 
        initialValues= { activity }
        validationSchema={!id ? formActivitiesValidationSchema : formEditActivitiesValidationSchema}
        onSubmit= {(values) => formikHandleSubmit(id, values)}
    >
        {props => {
            return <Basic {...props} activity = { {...activity} } />
            }}
    </Formik>
  )
}

export default FormActivities