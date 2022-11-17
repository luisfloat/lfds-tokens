import { mkfile, val, stream } from "vesic-js";
import { langs, stringifyProc } from "octopo-js";
import { octopizeTokens } from "corallia-js";
import tokens from "../core/index.js";

const config = {
    langs: [ langs.lessMin, langs.scssMin, langs.stylMin ],
    distPath: "./dist/lfds-tokens",
};

config.langs.forEach((lang) => stream()
    .src(val(tokens))
    .meta({ grammar: lang })
    .proc((data, meta) => octopizeTokens(data, meta.grammar))
    .proc(stringifyProc)
    .meta({ path: config.distPath + lang.extname })
    .sink(mkfile)
);