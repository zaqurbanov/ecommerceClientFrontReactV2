import * as yup from 'yup'
import { userFormMesasges } from '../enums/messages'


export const testimonialSchema = yup.object().shape({

    title:yup.string().required(`title ${userFormMesasges.required}`),
    comment:yup.string().required(`comment ${userFormMesasges.required}`)

})