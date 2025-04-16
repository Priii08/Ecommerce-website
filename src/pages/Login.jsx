import styled from "styled-components";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
              url("/pictures/bg2.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const PasswordToggle = styled.div`
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
  color: #555;
  margin: 5px;
`;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = (e) => {
    e.preventDefault();

    
    if (!username || !password) {
      setErrorMessage("Both fields are required.");
      return;
    }
    
    if (username === "user" && password === "123") {
      setErrorMessage("");
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword); 
  };

  const navigateToRegister = () => {
    window.location.href = "/Register"; 
  };

  const navigateToResetPassword = () => {
    window.location.href = "/reset-password"; 
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          {errorMessage && <div style={{ color: "red", marginBottom: "10px" }}>{errorMessage}</div>}
          
          <Input 
            type="text" 
            placeholder="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <PasswordToggle onClick={handlePasswordToggle}>
            {showPassword ? "Hide Password" : "Show Password"}
          </PasswordToggle>
          
          <Button type="submit">LOGIN</Button>
          
          <Link onClick={navigateToResetPassword}>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link onClick={navigateToRegister}>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
