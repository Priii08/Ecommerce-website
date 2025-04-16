import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), 
              url("/pictures/bg.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 10px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #004d4d;
  }
`;

const PasswordToggle = styled.div`
  font-size: 12px;
  margin-top: 10px;
  cursor: pointer;
  color: #555;
`;

const LoginLink = styled.div`
  font-size: 14px;
  margin-top: 15px;
  text-decoration: underline;
  color: #333;
  cursor: pointer;
  padding: 20px;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isPasswordStrong = (password) => {
    // Password must be at least 8 characters, include uppercase, lowercase, number, and special character
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.email.includes("@")) {
      alert("Please enter a valid email!");
      return;
    }

    // Validate the email domain
    const emailRegex = /^(?:[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com))$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email with Gmail, Outlook, or Yahoo domain!");
      return;
    }

    // Check for strong password
    if (!isPasswordStrong(formData.password)) {
      alert("Password is too weak! It must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
      return;
    }

    alert("Account created successfully!");
  };

  const navigateToLogin = () => {
    window.location.href = "/Login";
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            name="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <PasswordToggle onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? "Hide Passwords" : "Show Passwords"}
          </PasswordToggle>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <Button type="submit">CREATE</Button>

          <LoginLink onClick={navigateToLogin}>
            Already have an account? Login
          </LoginLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
