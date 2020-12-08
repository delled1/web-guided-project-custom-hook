import React, { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: ""
}

export const useForm = () => {

  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${firstName} ${lastName}`);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [values, handleChanges, handleSubmit, clearForm];
}