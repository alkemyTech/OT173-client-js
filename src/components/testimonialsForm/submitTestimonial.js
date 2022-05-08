import { createTestimonial, updateTestimonial } from "../../services/testimonialService"

export const saveNewTestimonial = async (formValue, navigate, setIsLoading, resetValues) => {
    await createTestimonial(formValue, navigate, setIsLoading, resetValues);
}

export const toUpdateTestimonial = async (id, formValue, setIsLoading, resetValues) => {
    await updateTestimonial(id, formValue, setIsLoading, resetValues);
}
