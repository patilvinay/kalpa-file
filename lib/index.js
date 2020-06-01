/* eslint-disable no-case-declarations */
"use strict";
// Let fs = require("fs-extra");

const fsn = require("fs-nextra");
const deasync = require("deasync");
// *
const mkdir = (args) => {
  let ret = false;
  fsn.mkdirs(args.dir, args.mode).then(() => {
    ret = true;
  }).catch(err => {
    ret.finish = true;
    ret.sucess = false;
    ret.error = err;

  });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};
const ensureDir = (args) => {
  let ret = false;
  fsn.ensureDirs(args.dir, args.mode).then(() => {
    ret = true;
  }).catch(err => {
    ret.finish = true;
    ret.sucess = false;
    ret.error = err;

  });;
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

const outputFile = (args) => {
  let ret = false;
  fsn.outputFile(args.file, args.str).then(() => {
    ret = true;
  }).catch(err => {
    ret.finish = true;
    ret.sucess = false;
    ret.error = err;

  });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};
const outputJson = (args) => {
  let ret = false;

  fsn.outputJson(args.file, args.json).then(() => {
    ret = true;
  }).catch(err => {
    ret.finish = true;
    ret.sucess = false;
    ret.error = err;

  });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};
const rm = (dir) => {
  let ret = false;
  fsn.remove(dir).then(() => {
    ret.finish = true;
    ret.success = true;
  }).catch(err => {
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

const copy = (arg) => {
  let ret = false;
  fsn.copy(arg.src, arg.dest).then(() => {
    ret.finish = true;
    ret.sucess = true;
  }).catch(err => {
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

const ensureSymlink = (arg) => {
  let ret = false;
  fsn.copy(arg.src, arg.dest).then(() => {
    ret.finish = true;
    ret.sucess = true;
  }).catch(err => {
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

const move = (arg) => {
  let ret = false;
  fsn.move(arg.src, arg.dest).then(() => {
    ret.finish = true;
    ret.sucess = true;
  }).catch(err => {
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
  // Console.log(play)
  switch (play.action) {
    case "mkdir":

      const args = {
        dir: play.dir,
        mode: play.mode
      };
      result = mkdir(dir, args);
      break;
    case "ensureDir":
      const args = {
        dir: play.dir,
        mode: play.mode
      };
      result = ensureDir(args);
      break;
    case "outputFile":
      args = {
        file: play.file,
        str: play.str
      }
      result = outputFile(args);
      break;
    case "outputJson":
      args = {
        file: play.file,
        json: play.json
      }
      result = outputJson(args);
      break;
    case "rmdir":
      const args = play.dir;
      result = rm(args);
      break;
    case "copy":
      const args = {
        src: play.src,
        dest: play.dest
      };
      result = copy(args);
      break;
    case "move":
      const args = {
        src: play.src,
        dest: play.dest
      };
      result = move(args);
      break;
    case "ensureSymlink":
      const args = {
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
