import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    // You can override global styles here for specific components or tags
    Global: {
      styles: {
        body: {
          margin: 0,
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#f5f5f5", // Optional background color
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
  },
});
