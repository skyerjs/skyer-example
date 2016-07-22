'use strict';

class IndexController extends Skyer.Controller {
  constructor() {
    super();
  }

  index() {
    return function* () {

      yield this.render('index', {
        body: 'Hello Skyer!'
      });

      /*
      yield this.render('index_swig', {
        body: 'Hello Skyer!'
      });

      yield this.render('index_ejs', {
        body: 'Hello Skyer!'
      });*/
    };
  }

  logger() {
    return function* () {
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