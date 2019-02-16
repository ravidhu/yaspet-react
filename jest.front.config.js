module.exports = {
    verbose: true,
    testRegex: "app/src/front/tests/.*\\.(ts|tsx)$",
    transform: {
        "^.+\\.(ts|tsx)?$": "ts-jest"
    },
    "moduleNameMapper": {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js"
    ]
};


