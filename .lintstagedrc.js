module.exports = {
  '**/*.{ts,tsx,js,jsx}': [
    filenames =>
      filenames.map(filename => `yarn run eslint --fix '${filename}'`), //Run linter
    filenames =>
      filenames.map(filename => `yarn run prettier --write '${filename}'`), // Run prettier
    filenames =>
      filenames.map(filename => `yarn run prettier --write '${filename}'`), // Run linter againt
    'git add',
  ],
};
