import { patch, post } from "./apiService"

export const createTestimonial = async formValue => {
    return await post('/users/testimonials', formValue);
}

export const updateTestimonial = async (id, formValue) => {
    return await patch(`/testimonials/${id}`, formValue);
}