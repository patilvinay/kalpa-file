"use strict";
let fs = require("fs");

const mkdir = obj => {
  let path = obj.path;
  var result;
  try {
    fs.mkdirSync(path, { recursive: true });
    result.code = "SUCCESS";
  } catch (err) {
    result.code = err.code;
  }

  obj.result = result;
  return obj;
};

const process = obj => {
  switch (obj.action) {
    case "mkdir":
      mkdir(obj);
      break;
    case y:
      break;
    default:
    // Code block
  }
};

const _process = process;
export { _process as process };
