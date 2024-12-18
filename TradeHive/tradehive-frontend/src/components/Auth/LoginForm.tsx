import React, { useState } from "react";
import { TextInput, PasswordInput, Button, Box } from "@mantine/core";
import { useLoginQueryLazyQuery } from "../../gql/graphql";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Use the lazy query hook for login
  const [login, { data, loading, error }] = useLoginQueryLazyQuery();

  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("email ", email);

    console.log("password ", password);
    // Handle login logic here
    login({ variables: { email, password } });
  };
  // Handle successful login if data is available
  if (data?.login) {
    const userId = data.login;
    console.log("Login successful, user ID:", userId);
    // Store userId in localStorage
    localStorage.setItem('userId', userId.toString());
    // Store userId or perform other login actions (e.g., redirect)
    navigate(`/products/${userId}`);
  }
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextInput
        label="Email"
        placeholder="your@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <PasswordInput
        label="Password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" fullWidth mt="xl">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;
