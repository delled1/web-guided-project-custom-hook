import React, { useState } from "react";

export const useForm = () => {
  const [firstName, setFirstName] = useState("");
  
  const handleChanges = e => {
    setFirstName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(firstName);
  };

  const clearForm = e => {
    e.preventDefault();
    setFirstName("");
  };

  return [firstName, handleChanges, handleSubmit, clearForm];
}