module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  testPathIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}     