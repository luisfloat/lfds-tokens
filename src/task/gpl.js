import { genGpl } from "corallia-js";
import { chain, task, writeFile } from "vesic-js";
import tokens from "../main/core/index.js";

function main() {
    chain()
        .src(tokens)
        .proc(({color}) => genGpl("lfds-tokens-colors", color))
        .sink(writeFile, { path: "./dist/lfds-tokens.gpl" })
}

task({
    main,
    desc: "Generate GPL file"
});