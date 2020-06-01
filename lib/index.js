/* eslint-disable no-case-declarations */
"use strict";
// Let fs = require("fs-extra");

const fsn = require("fs-nextra");
const deasync = require("deasync");
// *
const mkdir = args => {
  let ret = {
    finish: false
  };
  fsn
    .mkdirs(args.dir, args.mode)
    .then(() => {
      ret = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

const ensureDir = args => {
  let ret = {
    finish: false
  };
  fsn
    .ensureDirs(args.dir, args.mode)
    .then(() => {
      ret = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

const outputFile = args => {
  let ret = {
    finish: false
  };
  fsn
    .outputFile(args.file, args.str)
    .then(() => {
      ret = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

const outputJson = args => {
  let ret = false;

  fsn
    .outputJson(args.file, args.json)
    .then(() => {
      let ret = {
        finish: false
      };
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

const remove = target => {
  let ret = {
    finish: false
  };
  fsn
    .remove(target)
    .then(() => {
      ret.finish = true;
      ret.success = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.success = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret.finish !== true) {
    deasync.sleep(25);
  }

  return ret;
};

const copy = arg => {
  let ret = {
    finish: false
  };
  fsn
    .copy(arg.src, arg.dest)
    .then(() => {
      ret.finish = true;
      ret.sucess = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret.finish !== true) {
    deasync.sleep(25);
  }

  return ret;
};

const ensureSymlink = arg => {
  let ret = {
    finish: false
  };

  fsn
    .copy(arg.src, arg.dest)
    .then(() => {
      ret.finish = true;
      ret.sucess = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret.finish !== true) {
    deasync.sleep(25);
  }

  return ret;
};

const move = arg => {
  let ret = {
    finish: false
  };

  fsn
    .move(arg.src, arg.dest)
    .then(() => {
      ret.finish = true;
      ret.sucess = true;
    })
    .catch(err => {
      ret.finish = true;
      ret.sucess = false;
      ret.error = err;
    });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret.finish !== true) {
    deasync.sleep(25);
  }

  return ret;
};

//*
const process = obj => {
  let play = obj.node["kalpa-file"];
  let args = {};
  let result = {};
  // Console.log(play)
  switch (play.action) {
    case "mkdir":
      args = {
        dir: play.dir,
        mode: play.mode
      };
      result = mkdir(args);
      break;
    case "ensureDir":
      args = {
        dir: play.dir,
        mode: play.mode
      };
      result = ensureDir(args);
      break;
    case "outputFile":
      args = {
        file: play.file,
        str: play.str
      };
      result = outputFile(args);
      break;
    case "outputJson":
      args = {
        file: play.file,
        json: play.json
      };
      result = outputJson(args);
      break;
    case "remove":
      args = play.target;
      result = remove(args);
      break;
    case "copy":
      args = {
        src: play.src,
        dest: play.dest
      };
      result = copy(args);
      break;
    case "move":
      args = {
        src: play.src,
        dest: play.dest
      };
      result = move(args);
      break;
    case "ensureSymlink":
      args = {
        src: play.src,
        dest: play.dest
      };
      result = ensureSymlink(args);
      break;
    default:
      break;
  }

  return result;
};

exports.process = process;
