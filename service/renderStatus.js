const routerList = require("./renderContent.js");

function renderStatus(url) {
  return routerList.routerList.includes(url) ? 200 : 404;
}
module.exports = {
  renderStatus,
};