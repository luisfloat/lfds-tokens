import { genGpl } from "corallia-js";
import { stream, writeFile } from "vesic-js";
import tokens from "../main/core/index.js";

export default stream()
    .src(tokens)
    .proc(({color}) => genGpl("lfds-tokens-colors", color))
    .sink(writeFile, { path: "./dist/lfds-tokens.gpl" })