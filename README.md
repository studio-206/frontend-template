## Generic Nextjs template.

- Typescript
- Uses [husky](https://www.npmjs.com/package/husky) for easy git hooks. Runs a tsc and lint-staged pre-commit.
  - If you need to bypass this for a WIP PR etc, run `git commit =m "your message" --no-verify`.
- Uses [stitches](https://stitches.dev/) CSS-in-JS framework
- Moves stuff to `./src/` directory so:

```
./src/components/..
./src/pages/..
./src/styles/..
```

Includes a basic [stitches.dev](https://stitches.dev/) setup inside [src/styles/stitches.config.ts](src/styles/stitches.config.ts)

## How to use

Create a new repo by hitting [use this template](https://github.com/studio-206/nextjs-typescript-stitches-template/generate)

## Guidelines

We use `npm` as the package manager. No yarn.lock files allowed

### Components

When building a React component using stitches, we like to follow the following format:

- Imports
- Typescript Types
- Component
- Styled Stitches variables
- Default export

Here's an example:

```ts
// import Link from "next/link" <- Ensure node_modules are imported first

import { styled } from "src/styles/stitches.config";

// Typescript Types
interface Props {
  onClick: () => void;
}

// export component as named function
// This ensures we are importing the same thing.
// This is so you don't do `import whoCares from "./ReallyImportNamedFunctionThatActuallyCares"`
export const Button = ({ onClick }: Props) => {
  return <StyledButton onClick={onClick}>Click Me</StyledButton>;
};

// Styled elements
const StyledButton = styled("button");
