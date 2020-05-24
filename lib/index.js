/* eslint-disable no-case-declarations */
"use strict";
// Let fs = require("fs-extra");

const fsn = require("fs-nextra");
const deasync = require("deasync");
// *
const mkdir = (dir, mode) => {
  let ret = false;
  fsn.mkdirs(dir, mode).then(() => {
    ret = true;
  });
  // eslint-disable-next-line no-unmodified-loop-condition
  while (ret !== true) {
    deasync.sleep(25);
  }
};

//*
const process = obj => {
  let play = obj.node["kalpa-file"];
  // Console.log(play)
  switch (play.action) {
    case "mkdir":
      const dir = play.dir;
      const args = {
        mode: play.mode
      };
      mkdir(dir, args);
      break;
    default:
      break;
  }
};

exports.process = process;
