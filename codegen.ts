
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "src/generated/resolvers.ts": {
      config: {
        useIndexSignature: true,
        interfaceImplementingType: true
      },
      plugins: ["typescript", "typescript-resolvers", "typescript-document-nodes"]
    }
  }
};

export default config;
