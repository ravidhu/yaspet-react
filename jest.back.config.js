module.exports = {
    verbose: true,
    testRegex: "app/src/back/tests/.*\\.ts$",
    transform: {
        "^.+\\.ts?$": "ts-jest"
    },
    moduleFileExtensions: [
        "ts",
        "js"
    ]
};