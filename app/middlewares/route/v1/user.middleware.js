'use strict';

class UserMiddleware extends Skyer.RouteMiddleware {
  constructor() {
    super();
  }

  onlyMyself() {
    const self = this;
    const sky  = this.skyer;

    return function* ( next ) {
      console.log(' through v1 user#onlyMyself middleware .......');

      yield next;
    };
  }
}

module.exports = UserMiddleware;
