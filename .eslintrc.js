module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      // tsx: true, // Allows for the parsing of JSX
      jsx: true
    }
  },
  extends: [
    'plugin:@typescript-eslint/recommended' // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 检查分号
    'no-extra-semi': 2,
    // 缩进2或4个空格
    indent: ['error', 2],
    'space-before-blocks': ['error', 'always'],
    // function的参数前加空格
    // 'space-before-function-paren': 2,
    // @fixable 操作符左右必须有空格，比如 let sum = 1 + 2;
    'space-infix-ops': 'error',
    // @fixable 注释的斜线或 * 后必须有空格
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
          balanced: true
        }
      }
    ],
    // @fixable case 的冒号前禁止有空格，冒号后必须有空格
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    // 不检查分号
    'no-eq-null': 2, // 不允许对null用==或者!=
    'no-multiple-empty-lines': [2, { max: 2 }], // 空行最多不能超过两行
    'no-trailing-spaces': 2, // 一行最后不允许有空格
    'no-var': 2, // 使用let和const代替var
    'no-new': 0, // 不允许使用new一个实例后不赋值或者不比较
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    camelcase: 0,
    'arrow-spacing': 2 // =>的前/后括号
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
