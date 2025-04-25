export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // This handles CSS modules
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: false,
      },
    ],
    // Remove the CSS transform line
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};