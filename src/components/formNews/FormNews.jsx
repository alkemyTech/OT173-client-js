import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Form from './Form';
import { Formik } from 'formik';
import { formNewsValidationSchema } from './formNewsValidation';
import { formPatchNewsValidationSchema } from './formPatchNewsValidation';
import { get, post, put } from "../../services/apiService";
import { useDispatch } from 'react-redux';
import { alertStart } from "../../features/alert/slice/alertSlice";

const FormNews = () => {

    const param = useParams();
    let [initValues, setInitValues] = useState({});
    let url = `${process.env.REACT_APP_API_URI}/news/`;
    
    const dispatch = useDispatch();


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

                    return dispatch(alertStart({
                        alert : { 
                            title: response.data.msg || "Updated successfully.", 
                            icon: "info", 
                            timer: 1000, 
                            buttons: false 
                        }
                    }))
                }

                return dispatch(alertStart({
                    alert : { 
                        title: response.data.msg || "Failed. Try again.", 
                        icon: "error",
                        dangerMode: true
                    }
                }))

            } catch (err) {
                return dispatch(alertStart({
                    alert : { 
                        title: "An error occurred. Try again.", 
                        icon: "error",
                        dangerMode: true
                    }
                }))
            }
        } else {
            //insert
            try {
                let response = await post(url, {
                    ...addNew
                })

                if (response?.status === 200) {

                    return dispatch(alertStart({
                        alert : { 
                            title: response.data.msg || "Created successfully.",
                            icon: "info",
                            timer: 1000
                        }
                    }))
                }

            } catch (err) {
                return dispatch(alertStart({
                    alert : { 
                        title: "An error occurred. Try again.",
                        icon: "error",
                        dangerMode: true
                    }
                }))
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