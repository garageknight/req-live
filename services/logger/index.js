const bunyan = require('bunyan');
const configure = require('./configure');

function configureStreams (opts) {
  const streams = [];
  if (opts.console) {
    streams.push(configure.consoleStream(opts.console));
  }
  if (opts.file) {
    streams.push(configure.fileStream(opts.file));
  }
  if (streams.length === 0) {
    streams.push(configure.nullStream());
  }
  return streams;
}

function configureBunyan (opts) {
  const streams = configureStreams(opts);
  const log = bunyan.createLogger({
    name: 'root',
    streams
  });
  return log;
}

module.exports = (opts) => {
  return configureBunyan(opts);
};
