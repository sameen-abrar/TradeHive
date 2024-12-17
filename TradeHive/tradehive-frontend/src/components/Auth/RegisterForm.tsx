import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  SimpleGrid,
} from "@mantine/core";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <SimpleGrid cols={2} spacing={"sm"}>
        <div>
          <TextInput
            label="First Name"
            placeholder="John "
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <TextInput
            label="Last Name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </SimpleGrid>

      <TextInput
            label="Address"
            placeholder="Talent Rd, Explorer"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

      <SimpleGrid cols={2} spacing={"sm"}>
        <div>
          <TextInput
            label="Email"
            placeholder="your@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <TextInput
            label="Phone"
            placeholder="017XXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </SimpleGrid>

      <PasswordInput
        label="Password"
        placeholder="Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Re-type password"
        value={cpassword}
        onChange={(e) => setCPassword(e.target.value)}
        required
      />
      <Button type="submit" fullWidth mt="xl">
        Create Account
      </Button>
    </Box>
  );
};

export default RegisterForm;
