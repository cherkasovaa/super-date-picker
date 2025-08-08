module.exports = {
  files: ['src/**/*.css', 'src/**/*.module.css'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order'
  ],

  rules: {
    'order/order': [
      [
        'custom-properties',
        'declarations',
        { type: 'at-rule', name: 'media' },
        { type: 'at-rule', name: 'supports' },
        'rules',
      ],
      { severity: 'warning' },
    ],
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'block-no-empty': true,
    'no-duplicate-selectors': true,
    'selector-pseudo-class-no-unknown': true,
    'property-no-unknown': [
      true,
      { ignoreProperties: ['composes'] },
    ],
  },
};