import { Container, Paper, Title } from "@mantine/core";
import LoginForm from "../components/Auth/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
      <Container>
        <Paper p="xl" shadow="xs" withBorder>
          <Title order={2}>Login</Title>
          <LoginForm />
          <p>Don't have an account?</p>
          <Link to="/register">Sign Up!</Link>
        </Paper>
      </Container>
  );
};

export default LoginPage;
