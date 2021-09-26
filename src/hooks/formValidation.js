import React, { useCallback } from "react";
import validator from 'validator';

export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  
  const validEmail = (target, name, value) => {
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: (validator.isEmail(value)) ? "" : 'Некоректный e-mail' });
    setIsValid((!validator.isEmail(value)) ? validator.isEmail(value) : target.closest("form").checkValidity());
  };

  const validString = (target, name, value) => {
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: (validator.isEmpty(value)) ? 'Пустая строка' : '' });
    setIsValid((validator.isEmpty(value) ? !validator.isEmpty(value) : target.closest("form").checkValidity()));
  }

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === 'name' && value.length === 0) {
      validString(target, name, value)
      return
    }
    if (name === 'password' && value.length === 0) {
      validString(target, name, value)
      return
    }
    if (name === 'email') {
      validEmail(target, name, value);
      return;
    }
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues };
}