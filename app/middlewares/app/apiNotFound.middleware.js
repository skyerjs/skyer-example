'use strict';

class ApiNotFoundMiddleware extends Skyer.AppMiddleware {
  constructor() {
    super();

    this.order = 140;

    // disabled
    this._enabled = true;
  }

  __default() {
    return function* apiNotFound( next ) {
      yield* next;

      if ( this.status && this.status !== 404 ) {
        return;
      }
      if ( this.body ) {
        return;
      }

      this.status = 404;
    };
  }
}

module.exports = ApiNotFoundMiddleware;

