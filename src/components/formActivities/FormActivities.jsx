import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import Form from './Form';
import { Formik } from 'formik';
import { formEditActivitiesValidationSchema } from './validationEditFormActivities';
import { formActivitiesValidationSchema } from './validationFormActivities';
import { get, post, put } from '../../services/apiService';
import { useDispatch } from 'react-redux';
import { alertStart } from "../../features/alert/slice/alertSlice";

const FormActivities = () => {
  const [activity, setActivity] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const errorMessage = {
    title: 'An error occurred. Try again.',
  };
  let url = `/activities/`;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchActivitiesData = async (url, param, errorMessage) => {
      try {
        url += param;
        const response = await get(url);
        if (response.status === 200) {
          setActivity(response.data);
        }
      } catch (error) {
        return { error, ...errorMessage };
      }
    };

    if (id) {
      fetchActivitiesData(url, id);
    }
  }, [id, url]);

  const formikHandleSubmit = async (
    url,
    param = undefined,
    addNew,
    errorMessage
  ) => {
    if (param) {
      //update
      try {
        url += param;
        let data = { ...addNew };

        const response = await put(url, data);

        if (response?.status === 200) {

          dispatch(alertStart({
            alert : { 
                title: response.data.msg || 'Activity updated successfully.', 
                icon: "info",
                timer: 1000
            }
        }));
        return navigate('/backoffice/activities');
        }

        return dispatch(alertStart({
          alert : { 
              title: 'Failed. Try again.', 
              icon: "error",
              dangerMode: true
          }
      }));
      } catch (err) {
        dispatch(alertStart({
          alert : { 
              title: errorMessage.title, 
              icon: "error",
              dangerMode: true
          }
      }));
        return { err, ...errorMessage };
      }
    } else {
      //insert
      try {
        let response = await post(url, {
          ...addNew,
        });

        if (response?.status === 200) {

          dispatch(alertStart({
            alert : { 
                title: response.data.msg || 'Activity created successfully.',
                icon: "info"
            }
        }));
          return navigate('/backoffice/activities');
        }
      } catch (err) {
        dispatch(alertStart({
          alert : { 
              title: errorMessage.title,
              icon: "error",
              dangerMode: true
          }
      }));
        return { err, ...errorMessage };
      }
    }
  };

  return (
    <Formik
      initialValues={activity}
      validationSchema={
        !id
          ? formActivitiesValidationSchema
          : formEditActivitiesValidationSchema
      }
      onSubmit={values => formikHandleSubmit(url, id, values, errorMessage)}
    >
      {props => {
        return <Form {...props} activity={{ ...activity }} param={id} />;
      }}
    </Formik>
  );
};

export default FormActivities;
