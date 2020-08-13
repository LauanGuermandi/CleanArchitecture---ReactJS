module.exports = {
    roots: ['<rootDir>/src'],
    collectionCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}'
    ],
    coverageDirectory: 'coverage',
    testEnviroment: 'node',
    tranform: {
        '.+\\.ts$': 'ts-jest'
    }
}