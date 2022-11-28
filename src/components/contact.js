import React from "react";
import EmailForm from "./emailform";

function Contact({
  emailList, 
  formData, 
  handleFormSubmit,
  handleUsernameChange,
  handleUserEmailChange }
) {
  
  const renderUsers = emailList.map((user) => (
    <tr key={user.id}>
      <td key={user.username}>{user.username}</td>
      <td key={user.userEmail}>{user.userEmail}</td>
    </tr>
  ))
  
  return <div className="textContainer">
    <h1>Contact Us</h1>
    <p>Questions or concerns?  Please feel free to message us on our <a href="https://www.instagram.com/themontereypub/">Instagram</a>!</p>
    <br/>
    <h2>Pub Squad</h2>
    <p>join the Pub Squad for updates on events and specials</p>
    <EmailForm 
      handleFormSubmit={handleFormSubmit} 
      formData={formData}
      handleUserEmailChange={handleUserEmailChange}
      handleUsernameChange={handleUsernameChange}
      />
    <h4>recent initiates</h4>
        <table>
          <tr>
            <th>username</th>
            <th>e-mail</th>
          </tr>
          {renderUsers}
        </table>
  </div>;
}

export default Contact;