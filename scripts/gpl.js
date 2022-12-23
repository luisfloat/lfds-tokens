import { genGpl } from "corallia-js";
import { task, mkfile } from "vesic-js";
import tokens from "../src/main/core/index.js";

function main() {
    const data = genGpl("lfds-tokens-colors", tokens.color);
    mkfile(data, { path: "./dist/lfds-tokens.gpl" });
}

task({
    main,
    desc: "Generate GPL file"
});