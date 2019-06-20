import * as xlsxj from "xlsx-to-json";

xlsxj({
    input: "book.xlsx", 
    output: "output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
});