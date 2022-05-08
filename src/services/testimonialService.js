import { patch, post } from "./apiService"
import { success, error as popUpError } from './alertService'

export const createTestimonial = async (formValue, navigate, setIsLoading, resetValues) => {
    setIsLoading(true)
    const { ok, error } = await post('/users/testimonials', formValue);

    if (ok) {
        success({text: "Categoría creada con éxito"});
        navigate('/testimonial');
        setIsLoading(false);
        resetValues();
    } else {
        popUpError({ text: `${error.message}` });
        setIsLoading(false);
    }
}

export const updateTestimonial = async (id, formValue, setIsLoading, resetValues) => {
    setIsLoading(true)
    const { ok, error } = await patch(`users/testimonials/${id}`, formValue);
    
    if (ok) {
        success({text: "Categoría actualizada con éxito"});
        setIsLoading(false);
        resetValues();
    } else {
        popUpError({ text: `${error.message}` });
        setIsLoading(false);
    }
}