const notFind = JSON.stringify(require('../static/404.json'))
const dataList = JSON.stringify(require('../static/admin3/list.json'))

function renderContent(url) {
  switch (url) {
    case '/page4/node/dataList':
      return dataList;
    default:
      return notFind
  }
}
exports.renderContent = renderContent;
exports.routerList = ["/page4/node/dataList", "/home"];