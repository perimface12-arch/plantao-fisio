// Lê cases.js e imprime {id: texto para narrar} em JSON.
global.window = {};
require("../cases.js");
process.stdout.write(JSON.stringify(window.ROTEIRO(), null, 1));
