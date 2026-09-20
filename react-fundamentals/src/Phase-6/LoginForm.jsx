import { useState } from "react"

export default function LoginForm() {
  // TODO: Create state for username and password
  // TODO: Create a form with two inputs
  // TODO: Add a submit button
  // TODO: On submit, log the form data and clear the form
  const [loginForm, setLoginForm] = useState({username: '', password: ''})

  const handleLogin = (event) => {
    const { name, value } = event.target
    setLoginForm({
        ...loginForm, 
        [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(loginForm);
    setLoginForm({username: '', password: ''})
  }

    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" name="username" value={loginForm.username} onChange={handleLogin} placeholder="Input your username" /><br />
            <input type="password" name="password" value={loginForm.password} onChange={handleLogin} placeholder="Input your password" /><br />
            <button type="submit">Login</button>
        </form>
    )
}