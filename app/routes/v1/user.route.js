'use strict';

class UserRoute extends Skyer.Route {
  constructor() {
    super();

    this.routes = [
      ['get', '/', 'v1^UserController']
    ];
  }
}

module.exports = UserRoute;