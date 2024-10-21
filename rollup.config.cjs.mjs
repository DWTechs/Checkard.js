import resolve from "@rollup/plugin-node-resolve";

const config =  {
  input: "build/es6/ch.js",
  output: {
    name: "ch",
    file: "build/ch.cjs.js",
    format: "cjs"
  },
  external: [
  ],
  plugins: [
    resolve(),
  ]
};

export default config;