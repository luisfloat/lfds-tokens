import { writeFile, stream } from "vesic-js";
import { langs, stringifyProc } from "octopo-js";
import { octopizeTokens } from "corallia-js";
import tokens from "../main/core/index.js";

const config = {
    langs: [ langs.lessMin, langs.scssMin, langs.stylMin ],
    distPath: "./dist/lfds-tokens",
};

config.langs.forEach((lang) => stream()
    .src(tokens)
    .meta({ grammar: lang })
    .proc((data, {grammar}) => octopizeTokens(data, grammar))
    .proc(stringifyProc)
    .meta({ path: config.distPath + lang.extname })
    .sink(writeFile)
);