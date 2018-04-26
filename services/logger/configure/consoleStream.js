const PrettyStream = require('bunyan-pretty-stream');

module.exports = (opts) => {
  try {
    const consoleStream = { stream: new PrettyStream() };
    consoleStream.level = opts.level;
    return consoleStream;
  } catch (err) {
    err.message = 'Failed to create console logger: ' + err.message;
    throw err;
  }
};
