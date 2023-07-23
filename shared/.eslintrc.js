module.exports = {
  extends: ["@mvp/eslint-config-base"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": [
      "error",
      { ignores: ["Button", "Section"] },
    ],
  },
};
