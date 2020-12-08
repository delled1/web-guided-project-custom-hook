import React, { useState } from "react";

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleLastNameChanges = e => {
    setLastName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    alert(firstName, lastName);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
  };

  return [firstName, lastName, handleChanges, handleLastNameChanges, handleSubmit, clearForm];
}