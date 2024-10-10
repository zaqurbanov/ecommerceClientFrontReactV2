import *  as yup from 'yup'
import { userFormMesasges } from '../enums/messages'

export const resgisterSchema = yup.object().shape({


    name: yup
    .string(`name ${userFormMesasges.string}`)
    .required(`name ${userFormMesasges.string}`)
    .min(3,`${userFormMesasges.min} 3 values`)
    .matches(/^\S+$/, userFormMesasges.void),
  username: yup
    .string(`username ${userFormMesasges.string}`)
    .required(`username ${userFormMesasges.string}`)
    .min(3,`${userFormMesasges.min} 3 values`)
    .matches(/^\S+$/, userFormMesasges.void),
  email: yup
    .string(`email ${userFormMesasges.string}`)
    .email(userFormMesasges.email)
    .required(`email ${userFormMesasges.required}`),
  password: yup.string(`password ${userFormMesasges.string}`).required(`password ${userFormMesasges.required}`).min(8,`${userFormMesasges.min} 8 values`).matches(/^(?=.*[A-Z]).{8,}$/,userFormMesasges.password),
})