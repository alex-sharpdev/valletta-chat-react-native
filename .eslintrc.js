module.exports = {
  root: true,
  globals: { fetch: false },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier', 'react', 'react-native'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-plusplus': 'off',
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/no-cycle': 1,
    'import/prefer-default-export': 0,
    'no-unused-expressions': 'warn',
    'no-underscore-dangle': 'warn',
    'react/sort-comp': 'off',
    'react/require-default-props': 'warn',
    'react/prefer-stateless-function': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 1,
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-one-expression-per-line': 1,
    'react-hooks/exhaustive-deps': 1,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 0,
    'react-native/no-raw-text': [
      'warn',
      {
        skip: ['ScaledText', 'Label', 'Title'],
      },
    ],
    'react-native/sort-styles': 2,
    'global-require': 'off',
    // 'object-curly-spacing': 1,
    'operator-linebreak': 'off',
    'no-empty-function': ['error', { allow: ['constructors'] }],
    'no-useless-constructor': 0,
    'no-param-reassign': ['warn', { props: false }],
    'no-prototype-builtins': 1,
    'no-nested-ternary': 'warn',
    'no-eq-null': 'warn',
    'no-shadow': 'warn',
    'no-use-before-define': 'warn',
    camelcase: 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/member-ordering': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-literal-enum-member': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'off',
          properties: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 120,
        tabWidth: 2,
        endOfLine: 'auto',
      },
    ],
  },
  overrides: [
    {
      files: ['*test.ts', '*test.tsx', '*spec.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
