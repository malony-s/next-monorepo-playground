module.export = {
  root: true,
  extends: ['prettier', '@emotion'],
  parserOptions: {
    project: ['./tsconfig.base.json'],
  },
  rules: {
    '@emotion/jsx-import': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/import-from-emotion': 'error',
    '@emotion/styled-import': 'error',
  },
};
