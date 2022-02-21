## Generic Nextjs template.

- Typescript
- Uses [husky](https://www.npmjs.com/package/husky) for easy git hooks. Runs a typescript check on pre-commit.
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
