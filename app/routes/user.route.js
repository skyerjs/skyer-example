'use strict';

class UserRoute extends Skyer.Route {
  constructor() {
    super();

    this.name = 'users';

    this.routes = [
      ['get', '/userId', 'put', 'UserController#initUser'], // invalid and will not register
      ['param', 'userId', 'userName', 'UserController#initUser'], // invalid and will not register


      // todo: 支持这种格式
      /*      {
       method: 'get',
       path: '/items/:itemId',
       middlewares: [],
       controller: 'UserController#getItemInfo'
       },*/

      ['param', 'userId', 'UserController#initUser'],
      ['get', '/', 'UserController#index'],
      ['get', '/items/', 'UserController#getAllUserItems'],
      ['get', '/:userId', 'UserController#getUserInfo'],
      ['get', '/:userId/items', 'UserMiddleware#onlyMyself', 'UserController#getUserItems'],

      ['post', '/:userId/items/', 'UserController#addItems']
    ];
  }
}

module.exports = UserRoute;