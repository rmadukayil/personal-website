module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:no-pwa',
      assertions: {
        'uses-rel-preconnect': 'off',
        'unused-javascript': 'off',
        'tap-targets': 'warn',
        'errors-in-console': 'warn',
        'color-contrast': 'warn',
      },
    },
  },
}
