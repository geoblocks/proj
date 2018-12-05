module.exports = {
  transform: {
    '.*': 'babel-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!(ol|proj4)).+\\.js$']
};
