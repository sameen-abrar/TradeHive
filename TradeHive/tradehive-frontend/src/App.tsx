import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './pages/Router';
import { theme } from './pages/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Router />
    </MantineProvider>
  );
}