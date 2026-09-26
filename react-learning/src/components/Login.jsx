import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // login logic

    navigate("/");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
    
  );
}

export default Login;