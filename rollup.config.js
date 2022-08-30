import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
    input: "./src/main/core/index.js",
    output: {
        file: "./dist/lfds-corallia.js",
    },
    plugins: [
        nodeResolve(),
        terser(),
    ],
};