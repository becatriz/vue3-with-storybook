module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue3-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|jpeg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
};
