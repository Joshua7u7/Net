"use strict";
exports.__esModule = true;
var xlsxj = require("xlsx-to-json");
xlsxj({
    input: "book.xlsx",
    output: "output.json"
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(result);
    }
});
