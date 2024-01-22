const validateEmail = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

const checkPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/);

const validation = (userData, errors, setErrors) => {
  if (userData.email.length === 0) {
    setErrors({ ...errors, email: "Por favor ingrese un email" });
  } else if (!validateEmail.test(userData.email)) {
    setErrors({ ...errors, email: "El email ingresado no es válido" });
  } else if (userData.email.length > 35) {
    setErrors({
      ...errors,
      email: "El email ingresado no puede tener más de 35 caracteres",
    });
  } else setErrors({ ...errors, email: "" });

  if (!checkPassword.test(userData.password)) {
    setErrors({
      ...errors,
      password:
        "La contraseña debe incluir 1 minúscula, 1 mayúscula, 1 número y contener entre 6 y 10 caracteres",
    });
  } else setErrors({ ...errors, password: "" });
};

export default validation;
