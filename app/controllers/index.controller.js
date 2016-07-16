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