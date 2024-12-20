import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Box,
  SimpleGrid,
  Notification,
} from "@mantine/core";
import { useRegisterMutationMutation } from "../../gql/graphql";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const [registerMutation, { loading, error, data }] =
    useRegisterMutationMutation();

  if (loading) return <p>Loading...</p>;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle register logic here
    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      await registerMutation({
        variables: {
          firstName,
          lastName,
          email,
          phone,
          password,
          address,
        },
      });
      alert("Registration Successful: " + data?.register);

      // Reset form fields if necessary
      setFirstName("");
      setLastName("");
      setAddress("");
      setEmail("");
      setPhone("");
      setPassword("");
      setCPassword("");
    } catch (e) {
      console.error("Registration failed", e);
    }
  };

  if(data?.register){
    navigate(`/`);
  }

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

      {error && (
        <Notification color="red" title="Registration Error">
          {error.message}
        </Notification>
      )}
    </Box>
  );
};

export default RegisterForm;
