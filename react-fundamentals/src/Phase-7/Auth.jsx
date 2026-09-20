import { useState } from "react"
import LoginForm from "../Phase-6/LoginForm"

export default function Auth() {
  // TODO: Create state for login status
  // TODO: Show login form if not logged in
  // TODO: Show profile if logged in
  // TODO: Button to login/logout
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginFormHandler = () => {
    setIsLoggedIn(!isLoggedIn)
  }

    return (
        <div>
            <p>Phase 6: Exercise 2</p>
            <div>
                {isLoggedIn ? "Welcome,User!" : <LoginForm />}
            </div>
            <button onClick={loginFormHandler}>{isLoggedIn ? "Logout" : "Login"}</button>
        </div>
    )
}