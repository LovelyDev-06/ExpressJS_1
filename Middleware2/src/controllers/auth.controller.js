export const signup = (req, res) => {
  console.log("signup route handler activated");
  res.send("Signup Page");
}

export const login = (req, res) => {
  console.log("login route handler activated");
  res.send("Login Page");
}

export const resetPassword = (req, res) => {
  console.log("reset-password route handler activated");
  res.send("Reset Password Page");
}

