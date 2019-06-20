"use strict";
exports.__esModule = true;
var xlsx_to_json_1 = require("xlsx-to-json");
xlsx_to_json_1["default"]({
    input: "sample.xlsx",
    output: "output.json"
}, function (err, result) {
    if (err) {
        console.error(err);
    }
    else {
        console.log(result);
    }
});
