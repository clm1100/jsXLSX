var XLSX = require('xlsx');
// 读取操作
var worksheet = XLSX.readFile('./1234.xlsx');
var name= worksheet.SheetNames[0];
var parse = XLSX.utils.sheet_to_json;
var sheet1 = worksheet.Sheets[name];
console.log(XLSX.utils.encode_row(sheet1))
// var json = parse(sheet1);
// console.log(json);
// 写入操作
// var filename = "write.xlsx";
// var data = [["你哈哈实打实大家的拉大到敬爱是大的"],[1,2,3],[true, false, null, "sheetjs"],["foo","bar",new Date("2014-02-19T14:30Z"), "0.3"], ["baz", null, "qux"]]
// var jsondata = [{"name":"jack","age":18,"gender":"男"}];
// var ws_name = "SheetJS";
 

// var wb = XLSX.utils.book_new();
// var ws = XLSX.utils.aoa_to_sheet(data);
// var jsonws = XLSX.utils.json_to_sheet(jsondata);
 
// XLSX.utils.book_append_sheet(wb, jsonws, ws_name);

// XLSX.writeFile(wb, filename);
