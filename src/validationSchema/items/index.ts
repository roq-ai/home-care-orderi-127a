import * as yup from 'yup';

export const itemValidationSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  quantity: yup.number().integer().required(),
  price: yup.number().integer().required(),
});
