const blackhole = require('stream-blackhole');

module.exports = () => {
  try {
    return { stream: blackhole() };
  } catch (err) {
    err.message = 'Failed to create a NULL logger: ' + err.message;
    throw err;
  }
};
