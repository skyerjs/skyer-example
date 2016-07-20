'use strict';

class IndexController extends Skyer.Controller {
  constructor() {
    super();
  }

  index() {
    return function* () {
      yield this.render('index');
    };
  }

  mysqlTest(){
    return function*(){
      const mysqlClient = skyer.componentManager.getComponent('mysqlClient');
      
      const sql = 'SELECT * FROM users limit 0,20;';
      
      this.body = yield mysqlClient.queryRows(sql);
    }
  }

  redisTest(){
    return function* (){

      const redisClient = skyer.componentManager.getComponent('redisClient');

      yield redisClient.set('skyer', Skyer.version);
    
      const version = yield redisClient.get('skyer');

      this.body = 'skyer version:' + version;
    }
  }

  logger(){
    return function* (){
      skyer.logger.error('This is error logger.........');

      this.body = 'ok';
    }
  }

  addItem() {
    return function* () {
      this.body = this.request.body;
    };
  }

  getConfig() {
    const skyer = this.skyer;

    return function* () {
      this.body = skyer.config.getAll();
    };
  }

  getItems() {
    return function* () {
      this.body = 'get items';
    };
  }
}

module.exports = IndexController;