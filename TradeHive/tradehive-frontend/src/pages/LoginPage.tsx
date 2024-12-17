import { Container, Paper, Title } from "@mantine/core";
import LoginForm from "../components/Auth/LoginForm";

const LoginPage = () => {
  return (
      <Container size="xs" mt="xl">
        <Paper p="xl" shadow="xs" withBorder>
          <Title order={2}>Login</Title>
          <LoginForm />
          <p>Don't have an account?</p>
          <a>Sign Up!</a>
        </Paper>
      </Container>
  );
};

export default LoginPage;
