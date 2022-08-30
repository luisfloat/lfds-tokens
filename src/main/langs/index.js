import { mkfile, ret, val, vesic } from "vesic-js";
import { langs, stringifyProc } from "octopo-js";
import { coralliaProc } from "corallia-js";
import tokens from "../core/index.js";

const config = {
    langs: [ langs.lessMin, langs.scssMin, langs.stylMin ],
    distPath: "./dist/lfds-tokens",
};

for(let lang of config.langs) {
    const octopoData = vesic({
        src: val(tokens),
        proc: coralliaProc,
        sink: ret,
        meta: {
            grammar: lang,
        },
    });

    vesic({
        src: val(octopoData),
        proc: stringifyProc,
        sink: mkfile,
        meta: {
            grammar: lang,
            path: config.distPath + lang.extname,
        },
    });
}