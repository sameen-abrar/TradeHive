import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Router } from "./pages/Router";
import { theme } from "./pages/theme";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle/ColorSchemeToggle";

export default function App() {
  return (
    <MantineProvider theme={theme}>
        <ColorSchemeToggle />
        <Router />
    </MantineProvider>
  );
}
