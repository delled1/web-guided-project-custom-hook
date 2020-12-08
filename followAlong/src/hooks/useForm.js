import React, { useState } from "react";

export const useForm = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: ""
  })

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
    setFirstName("");
    setLastName("");
  };

  return [firstName, lastName, handleChanges, handleLastNameChanges, handleSubmit, clearForm];
}