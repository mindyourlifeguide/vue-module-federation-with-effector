module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [["effector/babel-plugin", { factories: ["@withease/factories"] }]],
};
