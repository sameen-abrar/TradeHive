import React, { useState } from 'react';
import { TextInput, PasswordInput, Button, Box } from '@mantine/core';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

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
