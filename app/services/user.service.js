'use strict';

class UserService extends Skyer.Service {
  *getUserById( userId ) {
    const result2 = yield this.skyer.services.v1.user.getUserById();

    console.log('userService result:%s', result2);
    return 'default';
  }
}

module.exports = UserService;