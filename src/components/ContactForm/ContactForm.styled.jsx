import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  & label {
    padding-bottom: 10px;
    margin-left: 10px;
  }
`;

export const Error = styled(ErrorMessage)`
  font-size: 14px;
  color: var(--color-warning);
`;

export const Input = styled(Field)`
  margin-bottom: 20px;
  width: 200px;
  border: 1px solid #e4e9f0;
  border-radius: 60px;
  padding: 10px 15px;
`;

export const ButtonSubmit = styled.button`
  width: 100px;
  background-color: #f3f6f9;
  border: none;
  border-radius: 20px;
  color: #82909e;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  transition: all 0.8s;
  margin: 0 auto 0;
`;
