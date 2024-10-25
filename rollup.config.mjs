import babel from "@rollup/plugin-babel";

const config =  {
  input: "build/es6/ch.js",
  output: {
    name: "ch",
    file: "build/ch.mjs",
    format: "es"
  },
  external: [],
  plugins: [
    babel({
      // exclude: "node_modules/**" // only transpile our source code
    }),
  ]
};

export default config;
