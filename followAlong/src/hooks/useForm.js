import React, { useState } from "react";

const initialValues = {
  firstName: "",
  lastName: ""
}

export const useForm = () => {

  const [values, setValues] = useState(initialValues);

  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChanges = e => {
    setLastName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(`${firstName} ${lastName}`);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };

  return [firstName, lastName, handleChanges, handleLastNameChanges, handleSubmit, clearForm];
}