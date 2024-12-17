import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "src/graphql/queries/**/*.graphql", // Adjusted path to reflect the query location
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        'typescript',                    // Generates TypeScript types
        'typescript-operations',         // Generates types for queries/mutations
        'typescript-react-apollo',       // Generates Apollo React hooks
      ],
      config: {
        withHooks: true,                 // Enables React hooks like `useQuery`
        fetcher: 'fetch',                // Optional: Use the fetch API for custom fetching
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
