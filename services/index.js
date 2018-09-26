const config = require('./config');
const logger = require('./logger');

module.exports.logger = logger(config.get('Logger'));
module.exports.config = config;
