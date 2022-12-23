import nodeResolve from "@rollup/plugin-node-resolve";
import fs from "fs";
import { rollup } from 'rollup';
import { terser } from "rollup-plugin-terser";
import { task } from "vesic-js";

const rollupConfig = (pkg) => ({
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
});

async function main() {
    const pkg = JSON.parse(fs.readFileSync("package.json"));
    const rollupOptions = rollupConfig(pkg);

    const inputOptions = {
        input: rollupOptions.input,
        plugins: rollupOptions.plugins,
    };
    const outputOptions = rollupOptions.output;

    build(inputOptions, outputOptions);
}

async function build(inputOptions, outputOptions) {
    let bundle;
    
    try {
        bundle = await rollup(inputOptions);

        outputOptions.forEach(async o => await bundle.write(o));
    } catch (error) {
        console.error(error);
    }

    if(!bundle) return;

    await bundle.close();
}

task({
    main,
    desc: "Bundle tokens to JavaScript",
});