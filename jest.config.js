module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_mdules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
