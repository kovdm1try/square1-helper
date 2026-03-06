module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  printWidth: 120,
  useTabs: false,
  semi: true,
  singleQuote: true,
  arrowParens: 'always',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react',
    '<THIRD_PARTY_MODULES>',
    '(custom|edit-group|helper-components|lists|views|components)',
    '(hooks|context|data|data/*|services|utils|constants)',
    '^../(.*)',
    '^./(.*)',
    '(.css|scss)'
  ],
  importOrderSeparation: true,
  importOrderCaseInsensitive: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true
};
