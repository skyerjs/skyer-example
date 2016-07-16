'use strict';

class UserMiddleware extends Skyer.RouteMiddleware {
  constructor() {
    super();
  }

  __default() {
    return function* ( next ) {
      console.log(' through user#__default middleware .......');

      yield next;
    };
  }

  onlyMyself() {
    const self = this;
    const sky  = this.skyer;

    return function* ( next ) {
      console.log(' through user#onlyMyself middleware .......');

      yield next;
    };
  }
}

module.exports = UserMiddleware;