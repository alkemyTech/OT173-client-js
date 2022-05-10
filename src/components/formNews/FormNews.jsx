import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from './Form';
import { Formik } from 'formik';
import { formNewsValidationSchema } from './formNewsValidation';
import { formPatchNewsValidationSchema } from './formPatchNewsValidation';
import axios from "axios";
import { error, info } from "../../services/alertService";
import { get, post, put } from "../../services/apiService";

const FormNews = () => {

    const param = useParams();
    let [initValues, setInitValues] = useState({});
    let url = `${process.env.REACT_APP_API_URI}/news/`;
    
    useEffect(async () => {
        
        //Request novelty information to edit
        async function fetchData (param) {
            
            try {
                url += param;
                const response = await get(url);
    
                if (response.status === 200) {
                    setInitValues(response.data);
                }
            } catch (error) {
                return { title: "An error occurred. Try again.", error }
            }
        }
        
        if (param.id) {
            fetchData(param.id)
        }
    }, [])

    const formikHandleSubmit = async (props, addNew, paramId = undefined) => {

        if (paramId) {
            //update
            try {
                url += paramId;
                let data = { ...addNew }

                const response = await put(url, data)

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
                return { title: "An error occurred. Try again.", err }
            }
        } else {
            //insert
            try {
                let response = await post(url, {
                    ...addNew
                })

                if (response?.status === 200) {
                    const data = {
                        title: response.data.message
                    }
                    return info(data)
                }

            } catch (err) {
                return error({ title: "An error occurred. Try again.", err })
            }
        }
    }

    return (
        <Formik
            initialValues={initValues}
            validationSchema={param.id ? formPatchNewsValidationSchema : formNewsValidationSchema}
            onSubmit={(values) => formikHandleSubmit(initValues, values, param.id)}
        >
            {props => {
                return <Form {...props} initValues={initValues} />
            }}
        </Formik>
    )
}

export default FormNews