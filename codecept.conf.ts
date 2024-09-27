export const config: CodeceptJS.MainConfig = {
  name: "codeceptjs-yarn-ts",
  tests: "./specs/*.spec.ts",
  output: "./output",
  plugins: {
    allure: {
      outputDir: "./allure-results",
      require: "allure-codeceptjs",
    },
  },
};
