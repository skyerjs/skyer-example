'use strict';

class MockUserMiddleware extends Skyer.AppMiddleware {
  constructor() {
    super();

    this.order = 135;
  }

  __default() {
    const skyer = this.skyer;

    return function* MockUser( next ) {
      const mockUser = skyer.config.get('mockUser');
      if ( mockUser && mockUser.enabled ) {
        this.user = mockUser.user;
      }

      yield next;
    };
  }
}

module.exports = MockUserMiddleware;