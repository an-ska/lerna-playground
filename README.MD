# Requirements

1. Node.js
2. Lerna

## Available Scripts

In the project directory, you can run:

### `npm run bootstrap`

Installs all of their dependencies and links any cross-dependencies.

When run, this command will:

1. `npm install` all external dependencies of each package.
2. Symlink together all Lerna `packages` that are dependencies of each other.
3. `npm run prepublish` in all bootstrapped packages (unless `--ignore-prepublish` is passed).
4. `npm run prepare` in all bootstrapped packages.

### `npm run dev`

Starts our packages.

When run, this command will:

1. Start the front-end package on [http://localhost:3000/](http://localhost:3000).
2. Start watching changes for the components package.
