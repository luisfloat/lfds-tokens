import nodeResolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import fs from "fs";

const pkg = JSON.parse(fs.readFileSync("package.json"));

export default {
    input: "./src/main/core/index.js",
    output: [
        {
            file: pkg.module,
            format: "esm",
            plugins: [ terser() ],
        },
        {
            file: pkg.main,
            format: "cjs",
            exports: "auto",
            plugins: [ terser() ],
        },
    ],
    plugins: [
        nodeResolve(),
        terser(),
    ],
};