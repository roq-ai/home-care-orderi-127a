import * as yup from 'yup';

export const residentValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  date_of_birth: yup.date().required(),
  gender: yup.string().required(),
  medical_condition: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
