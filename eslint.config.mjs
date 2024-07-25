import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    pluginJs.configs.recommended,
    jsdoc.configs['flat/recommended'],
    eslintConfigPrettier,
    {
        files: ['src/**/*.js'],
        ignores: ['**/*.config.js'],
        languageOptions: {
            ecmaVersion: 6,
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: false
                }
            },
            sourceType: 'module'
        },
        plugins: {
            jsdoc
        },
        rules: {
            // JSDoc
            'jsdoc/check-access': 'error', // Recommended
            'jsdoc/check-alignment': 'error', // Recommended
            'jsdoc/check-examples': 'off',
            'jsdoc/check-indentation': 'error',
            'jsdoc/check-line-alignment': 'error',
            'jsdoc/check-param-names': 'error', // Recommended
            'jsdoc/check-property-names': 'error', // Recommended
            'jsdoc/check-syntax': 'error',
            'jsdoc/check-tag-names': 'error', // Recommended
            'jsdoc/check-types': 'error', // Recommended
            'jsdoc/check-values': 'error', // Recommended
            'jsdoc/empty-tags': 'error', // Recommended
            'jsdoc/implements-on-classes': 'error', // Recommended
            'jsdoc/informative-docs': 'error',
            'jsdoc/match-description': 'error',
            'jsdoc/multiline-blocks': 'error', // Recommended
            'jsdoc/no-bad-blocks': 'error',
            'jsdoc/no-blank-block-descriptions': 'error',
            'jsdoc/no-defaults': 'error',
            'jsdoc/no-missing-syntax': 'off',
            'jsdoc/no-multi-asterisks': 'error', // Recommended
            'jsdoc/no-restricted-syntax': 'off',
            'jsdoc/no-types': 'off',
            'jsdoc/no-undefined-types': 'error', // Recommended
            'jsdoc/require-asterisk-prefix': 'error',
            'jsdoc/require-description': 'error',
            'jsdoc/require-description-complete-sentence': 'error',
            'jsdoc/require-example': 'off',
            'jsdoc/require-file-overview': 'error',
            'jsdoc/require-hyphen-before-param-description': 'error',
            'jsdoc/require-jsdoc': 'error', // Recommended
            'jsdoc/require-param': 'error', // Recommended
            'jsdoc/require-param-description': 'error', // Recommended
            'jsdoc/require-param-name': 'error', // Recommended
            'jsdoc/require-param-type': 'error', // Recommended
            'jsdoc/require-property': 'error', // Recommended
            'jsdoc/require-property-description': 'error', // Recommended
            'jsdoc/require-property-name': 'error', // Recommended
            'jsdoc/require-property-type': 'error', // Recommended
            'jsdoc/require-returns': 'error', // Recommended
            'jsdoc/require-returns-check': 'error', // Recommended
            'jsdoc/require-returns-description': 'error', // Recommended
            'jsdoc/require-returns-type': 'error', // Recommended
            'jsdoc/require-throws': 'error',
            'jsdoc/require-yields': 'error', // Recommended
            'jsdoc/require-yields-check': 'error', // Recommended
            'jsdoc/sort-tags': 'error',
            'jsdoc/tag-lines': 'error', // Recommended
            'jsdoc/valid-types': 'error', // Recommended
            // ESLint All
            'accessor-pairs': 'error',
            'array-callback-return': 'error',
            'arrow-body-style': 'error',
            'block-scoped-var': 'error',
            'camelcase': 'error',
            'capitalized-comments': 'off',
            'class-methods-use-this': 'error',
            'complexity': 'error',
            'consistent-return': 'error',
            'consistent-this': 'error',
            'constructor-super': 'error',
            'curly': 'error',
            'default-case': 'error',
            'default-case-last': 'error',
            'default-param-last': 'error',
            'dot-notation': 'error',
            'eqeqeq': 'error',
            'for-direction': 'error',
            'func-name-matching': 'error',
            'func-names': 'error',
            'func-style': 'off',
            'getter-return': 'error',
            'grouped-accessor-pairs': 'error',
            'guard-for-in': 'error',
            'id-denylist': 'error',
            'id-length': 'off',
            'id-match': 'error',
            'init-declarations': 'error',
            'logical-assignment-operators': 'error',
            'max-classes-per-file': 'error',
            'max-depth': 'error',
            'max-lines': 'error',
            'max-lines-per-function': 'error',
            'max-nested-callbacks': 'error',
            'max-params': 'error',
            'max-statements': 'error',
            'new-cap': 'error',
            'no-alert': 'error',
            'no-array-constructor': 'error',
            'no-async-promise-executor': 'error',
            'no-await-in-loop': 'error',
            'no-bitwise': 'error',
            'no-caller': 'error',
            'no-case-declarations': 'error',
            'no-class-assign': 'error',
            'no-compare-neg-zero': 'error',
            'no-cond-assign': 'error',
            'no-console': 'warn',
            'no-const-assign': 'error',
            'no-constant-binary-expression': 'error',
            'no-constant-condition': 'error',
            'no-constructor-return': 'error',
            'no-continue': 'error',
            'no-control-regex': 'error',
            'no-debugger': 'error',
            'no-delete-var': 'error',
            'no-div-regex': 'error',
            'no-dupe-args': 'error',
            'no-dupe-class-members': 'error',
            'no-dupe-else-if': 'error',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-duplicate-imports': 'error',
            'no-else-return': 'error',
            'no-empty': 'error',
            'no-empty-character-class': 'error',
            'no-empty-function': 'error',
            'no-empty-pattern': 'error',
            'no-empty-static-block': 'error',
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-ex-assign': 'error',
            'no-extend-native': 'error',
            'no-extra-bind': 'error',
            'no-extra-boolean-cast': 'error',
            'no-extra-label': 'error',
            'no-fallthrough': 'error',
            'no-func-assign': 'error',
            'no-global-assign': 'error',
            'no-implicit-coercion': 'error',
            'no-implicit-globals': 'error',
            'no-implied-eval': 'error',
            'no-import-assign': 'error',
            'no-inline-comments': 'error',
            'no-inner-declarations': 'error',
            'no-invalid-regexp': 'error',
            'no-invalid-this': 'error',
            'no-irregular-whitespace': 'error',
            'no-iterator': 'error',
            'no-label-var': 'error',
            'no-labels': 'error',
            'no-lone-blocks': 'error',
            'no-lonely-if': 'error',
            'no-loop-func': 'error',
            'no-loss-of-precision': 'error',
            'no-magic-numbers': 'warn',
            'no-misleading-character-class': 'error',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-negated-condition': 'error',
            'no-nested-ternary': 'error',
            'no-new': 'error',
            'no-new-func': 'error',
            'no-new-native-nonconstructor': 'error',
            'no-new-wrappers': 'error',
            'no-nonoctal-decimal-escape': 'error',
            'no-obj-calls': 'error',
            'no-object-constructor': 'error',
            'no-octal': 'error',
            'no-octal-escape': 'error',
            'no-param-reassign': 'error',
            'no-plusplus': 'error',
            'no-promise-executor-return': 'error',
            'no-proto': 'error',
            'no-prototype-builtins': 'error',
            'no-redeclare': 'error',
            'no-regex-spaces': 'error',
            'no-restricted-exports': 'error',
            'no-restricted-globals': 'error',
            'no-restricted-imports': 'error',
            'no-restricted-properties': 'error',
            'no-restricted-syntax': 'error',
            'no-return-assign': 'error',
            'no-script-url': 'error',
            'no-self-assign': 'error',
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-setter-return': 'error',
            'no-shadow': 'error',
            'no-shadow-restricted-names': 'error',
            'no-sparse-arrays': 'error',
            'no-template-curly-in-string': 'error',
            'no-ternary': 'error',
            'no-this-before-super': 'error',
            'no-throw-literal': 'error',
            'no-undef': 'error',
            'no-undef-init': 'error',
            'no-undefined': 'error',
            'no-underscore-dangle': 'error',
            'no-unexpected-multiline': 'error',
            'no-unmodified-loop-condition': 'error',
            'no-unneeded-ternary': 'error',
            'no-unreachable': 'error',
            'no-unreachable-loop': 'error',
            'no-unsafe-finally': 'error',
            'no-unsafe-negation': 'error',
            'no-unsafe-optional-chaining': 'error',
            'no-unused-expressions': 'error',
            'no-unused-labels': 'error',
            'no-unused-private-class-members': 'error',
            'no-unused-vars': 'warn',
            'no-use-before-define': 'error',
            'no-useless-assignment': 'error',
            'no-useless-backreference': 'error',
            'no-useless-call': 'error',
            'no-useless-catch': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-concat': 'error',
            'no-useless-constructor': 'error',
            'no-useless-escape': 'error',
            'no-useless-rename': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-void': 'error',
            'no-warning-comments': 'error',
            'no-with': 'error',
            'object-shorthand': 'error',
            'one-var': 'error',
            'operator-assignment': 'error',
            'prefer-arrow-callback': 'error',
            'prefer-const': 'error',
            'prefer-destructuring': 'error',
            'prefer-exponentiation-operator': 'error',
            'prefer-named-capture-group': 'error',
            'prefer-numeric-literals': 'error',
            'prefer-object-has-own': 'error',
            'prefer-object-spread': 'error',
            'prefer-promise-reject-errors': 'error',
            'prefer-regex-literals': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'radix': 'error',
            'require-atomic-updates': 'error',
            'require-await': 'error',
            'require-unicode-regexp': 'error',
            'require-yield': 'error',
            'sort-imports': 'error',
            'sort-keys': 'error',
            'sort-vars': 'error',
            'strict': 'error',
            'symbol-description': 'error',
            'unicode-bom': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',
            'vars-on-top': 'error',
            'yoda': 'error'
        }
    }
];
