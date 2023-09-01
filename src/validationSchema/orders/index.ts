import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  status: yup.string().required(),
  order_date: yup.date().required(),
  delivery_date: yup.date().required(),
  resident_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
