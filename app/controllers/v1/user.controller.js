'use strict';

class UserController extends Skyer.Controller {
  constructor() {
    super();
  }

  index() {
    return function* () {
      this.body = 'v1 user index';
    };
  }
}

module.exports = UserController;