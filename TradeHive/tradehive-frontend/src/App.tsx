import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./pages/Router";
import { theme } from "./pages/theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";

export default function App() {
  return (
    // Wrap the app with ApolloProvider and MantineProvider
    <ApolloProvider client={client}>
      <MantineProvider theme={theme}>
        <ColorSchemeToggle />
        <Router />
      </MantineProvider>
    </ApolloProvider>
  );
}
