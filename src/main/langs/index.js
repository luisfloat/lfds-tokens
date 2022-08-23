import { mkfile, ret, val, vesic } from "vesic-js";
import { langs, stringifyProc } from "octopo-js";
import { coralliaProc } from "corallia-js";
import tokens from "../core/index.js";

let localLangs = [ langs.lessMin, langs.scss, langs.styl ];

for(let lang of localLangs) {
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
            path: "./dist/lfds-tokens" + lang.extname,
        },
    });
}