import * as yup from 'yup'


export const subsSchema = yup.object().shape({
email:yup.string().email()

})