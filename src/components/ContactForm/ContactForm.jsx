import {
  Input,
  InputContainer,
  ButtonSubmit,
  FormStyled,
  Error,
} from './ContactForm.styled';
import { Formik } from 'formik';
import { validation } from './validation';

import {
  useGetContactsQuery,
  useCreateContactMutation,
} from 'redux/contactSlice';

const initialValues = {
  name: '',
  number: '',
};
export const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
  const { data } = useGetContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    const findContact = data.find(contact =>
      contact.name.toLowerCase().includes(values.name.toLowerCase())
    );
    findContact
      ? alert(`${values.name} is already in contact`)
      : createContact(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validation}
    >
      {({ errors, touched, isValidating }) => (
        <FormStyled>
          <InputContainer>
            <label>
              <Input type="text" name="name" />
              name
              <Error component="div" name="name" />
            </label>

            <label>
              <Input type="tel" name="number" />
              number
              <Error component="div" name="number" />
            </label>
          </InputContainer>

          <ButtonSubmit type="submit">add</ButtonSubmit>
        </FormStyled>
      )}
    </Formik>
  );
};
