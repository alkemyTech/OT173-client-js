import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Basic from './Basic';
import { Formik } from 'formik';
import { formNewsValidationSchema } from './formNewsValidation';
import { formPatchNewsValidationSchema } from './formPatchNewsValidation';
import axios from "axios";
import { error, info } from "../../services/alertService";

const FormNews = () => {

    const param = useParams();
    let [initValues, setInitValues] = useState({})



    useEffect(async () => {

        //Request novelty information to edit
        async function fetchData (param) {

            try {
                const response = await axios.get("http://localhost:3001/news/" + param)
    
                if (response.status === 200) {
                    setInitValues(response.data)
                }
            } catch (error) {
                console.log(error)
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
                const url = `http://localhost:3001/news/${paramId}`;
                let data = { ...addNew }

                const response = await axios.patch(url, data)

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

                let response = await axios.post("http://localhost:3001/news", {
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
            initialValues={initValues}
            validationSchema={param.id ? formPatchNewsValidationSchema : formNewsValidationSchema}
            onSubmit={(values) => formikHandleSubmit(initValues, values, param.id)}
        >
            {props => {
                return <Basic {...props} initValues={initValues} />
            }}
        </Formik>
    )
}

export default FormNews