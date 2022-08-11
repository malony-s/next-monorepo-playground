module.exports = {
  parser: 'typescript',
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  bracketSpacing: true,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: false,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: ['react', '^next/(.*)$', '^@shared/(.*)$', '^[~]', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
};
