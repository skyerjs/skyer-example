'use strict';

class IndexRoute extends Skyer.Route {
  constructor() {
    super();

    this.routes = [
      ['get', '/', 'IndexController#index'],
      ['get', '/logger', 'IndexController#logger'],

      ['get', '/items', 'IndexController#getItems'],
      ['get', '/config', 'IndexController#getConfig'],
      ['post', '/items', 'IndexController#addItem']
    ];
  }
}

module.exports = IndexRoute;