import "./Settings.css";
import React from "react";
import { useState } from "react";

export function Settings() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)

 const handleChange = (e) => {
   console.log(e.target);
   const { name, value} = e.target;
   setFormValues({...formValues, [name]: value})
   console.log(formValues);
 };
const validate = (values) => {
   const errors ={}
   if(!values.username) {
      errors.username = "Username is required!"
   }
   if(!values.email) {
      errors.email = "Email is required!"
   }   
   if(!values.password) {
      errors.password = "Password is required!"
   }
   return errors;
 }
 const handleSubmit = (e) => {
   e.preventDefault();
   setFormErrors(validate(formValues))
   setIsSubmit(true)
 }

 

  return (
    <div className="Settings">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Settings</h1>
        <div className="ui-divider"></div>
        <div className="form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Settings;
