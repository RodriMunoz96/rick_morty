import React, { useState } from "react";
import validation from "./validation";

export default function Form(props) {
  const { login } = props;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    validation(
      {
        ...userData,
        [event.target.name]: event.target.value,
      },
      errors,
      setErrors
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        ></input>
        <br />
        <label>Contraseña</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        ></input>
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
