import React from "react";

function EmailForm( {
  formData,
  handleFormSubmit,
  handleUsernameChange,
  handleUserEmailChange
} ) {

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" onChange={handleUsernameChange} name="username" value={formData.username} />
      <input type="text" onChange={handleUserEmailChange} name="userEmail" value={formData.userEmail} />
      <button type="submit">Join the Squad!</button>
    </form>
  );
}

export default EmailForm;