import { Formik, Form, Field } from 'formik';
import { patch, post } from '../../services/apiService';
import { info, error as errorAlert } from '../../services/alertService';
import {
  initialCategoryValue,
  categorySchema,
  categoryHandleError,
} from '../../helpers/categoryFormSettings/categoryFormSettings';
import CategoryStyles from './CategoryForm.module.css';

const CategoryForm = ({ category = {} }) => {
  const isAdding = Object.keys(category).length === 0;

  const submitCategory = async formValue => {
    const {data,error,ok} = (isAdding
      ? await post('/categories', formValue)
      : await patch('/categories', formValue))
    ok ? info(data.msg || "Se creo exitosamente") : errorAlert(error.message || data.msg );
  };

  const initialCategory = isAdding ? initialCategoryValue : category;

  return (
    <div className={CategoryStyles.category_wrapper}>
      <div className={CategoryStyles.category}>
        <h3>{isAdding ? 'Create Category' : 'Edit Category'}</h3>
        <Formik
          onSubmit={submitCategory}
          validateOnBlur={false}
          validateOnMount={false}
          validateOnChange={false}
          validationSchema={categorySchema}
          initialValues={initialCategory}
        >
          {({ errors, isSubmitting }) => {
            return (
              <Form className={CategoryStyles.category_form}>
                <Field
                  placeholder="Enter name..."
                  name="name"
                  className={CategoryStyles.category_form_field_input}
                />
                {categoryHandleError(errors).name()}
                <Field
                  placeholder="Enter description..."
                  name="description"
                  className={CategoryStyles.category_form_field_input}
                />
                {categoryHandleError(errors).description()}
                <button
                  type="submit"
                  className={CategoryStyles.submit}
                  disabled={isSubmitting}
                >
                  {isAdding ? 'Add Category' : 'Edit Category'}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
export default CategoryForm;
