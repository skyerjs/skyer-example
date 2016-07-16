'use strict';

class UserController extends Skyer.Controller {
  constructor() {
    super();
  }

  index() {
    const skyer = this.skyer;

    return function* () {
      this.body = '/users/';
    };
  }

  initUser() {
    return function* ( id, next ) {
      console.log('init user by id:%s', id);

      // const user = yield db.User.findById(id);
      // this.user = user;

      yield next;
    };
  }

  getUserInfo() {
    return function* () {

      const userId = this.params.userId;
      console.log(userId);


      console.log(this.user);

      this.body = 'getUserInfo ok';
    };
  }

  getUserItems() {
    return function* () {
      const userId = this.params.userId;
      console.log(userId);

      this.body = 'getUserItems ok';
    };
  }

  getAllUserItems() {
    const self  = this;
    const skyer = this.skyer;

    return function* () {

      console.log('sleep 2s...');

      yield self.sleep(1000 * 2);

      const config = skyer.config;

      // const redisConf = config.get('redis');
      const services = skyer.services;
      console.log(services);

      const result1 = yield skyer.services.user.getUserById();

      const result2 = yield skyer.services.v1.user.getUserById();

      console.log('#1:%s #2:%s', result1, result2);

      console.log(skyer.consts);

      // services.user => user.service.js
      // services.v1.user => v1/user.service.js

      const components = skyer.components;

      this.body = 'getMyMessages ok';
    };
  }

  addItems() {
    return function* () {
      this.body = this.request.body;
    };
  }
}

module.exports = UserController;