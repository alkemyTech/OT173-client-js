import * as Yup from "yup";

export const initialCategoryValue = { name: '', description: '' }


export const categorySchema = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  description: Yup.string().required("Description is Required").min(4,"Description must be at least length 4"),
});

export const categoryHandleError = (errors) => {
  return {
    name: () => {
      return errors.name && <div className="logicategory-form__error">{errors.name}</div> 
    },
    description: () => {
      return errors.description && <div className="category-form__error">{errors.description}</div>;
    },
  };
};
