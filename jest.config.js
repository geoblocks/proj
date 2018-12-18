module.exports = {
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -0
    }
  },
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  transform: {
    '.*': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(ol|proj4)).+\\.js$']
};
