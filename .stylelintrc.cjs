module.exports = {
  extends: [
    "stylelint-config-standard-scss", 
    "stylelint-config-recess-order"
  ],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      { "ignoreAtRules": ["apply", "layer"] }
    ]
  }
}
