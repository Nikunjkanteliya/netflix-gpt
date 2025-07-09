export const formValidation = (email, password, name) => {
  const isValidname = /([a-zA-Z0-9_\s]+)/.test(name);
  const isvalideEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isvalidePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidname) return { nameError: "not a valid Name" };
  if (!isvalideEmail) return { emailError: "not a valid Email" };
  if (!isvalidePassword) return { passwordError: "not a valid Password" };
  return null;
};
