import { Container, Paper, Title} from '@mantine/core';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/Auth/RegisterForm';

const RegisterPage = () => {
  return (
    <Container size="xs" mt="xl">
      <Paper p="xl" shadow="xs" withBorder>
          <Title order={2}>Register</Title>
          <RegisterForm />
          <p>Already have an account?</p>
          <Link to="/">Sign In!</Link>
        </Paper>
    </Container>
  );
};

export default RegisterPage;
