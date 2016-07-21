'use strict';

class DbRoute extends Skyer.Route {
  constructor() {
    super();

    this.routes = [
      ['get', '/', 'DbController#index'],
      ['get', '/redis', 'DbController#redisTest'],
      ['get', '/mysql', 'DbController#mysqlTest'],
      ['get', '/sequelize', 'DbController#sequelizeTest'],
      ['get', '/mongo', 'DbController#mongoTest'],
      ['get', '/mongoose', 'DbController#mongooseTest'],
      ['get', '/mongoose/model', 'DbController#mongooseModelTest']
    ];
  }
}

module.exports = DbRoute;