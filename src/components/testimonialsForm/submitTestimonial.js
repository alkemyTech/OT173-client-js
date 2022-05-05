import { succes, error as popUpError } from "../../services/alertService"
import { createTestimonial, updateTestimonial } from "../../services/testimonialService"

export const saveNewTestimonial = async (formValue, navigate, setIsLoading) => {
    const { ok, error } = await createTestimonial(formValue)
    ok
        ?
        succes() && navigate('/allTestimonials')
        :
        popUpError({ error: error }) && setIsLoading(false)
}

export const toUpdateTestimonial = async (id, formValue, setIsLoading) => {
    const { ok, error } = await updateTestimonial(id, formValue)
    ok
        ?
        succes() && setIsLoading(false)
        :
        popUpError({ error: error }) && setIsLoading(false)
}
