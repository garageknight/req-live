module.exports = (services) => {
  return {
    web: require('./server')(services)
  };
};
