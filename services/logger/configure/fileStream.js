const path = require('path');
const fs = require('fs');

function createDir (filePath) {
  const dirPath = path.dirname(filePath);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

function checkFilePath (filePath) {
  if (!filePath) {
    throw new Error('No file path provided');
  }
  createDir(filePath);
}

module.exports = (opts) => {
  try {
    const filePath = opts.path;
    if (!filePath) {
      throw new Error('No file path provided');
    }
    checkFilePath(filePath);
    return ({ path: filePath, level: opts.level });
  } catch (err) {
    err.message = 'Failed to create file logger: ' + err.message;
    throw err;
  }
};
