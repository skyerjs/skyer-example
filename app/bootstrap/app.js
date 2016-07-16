'use strict';

const path   = require('path');
const render = require('koa-swig');

module.exports = function ( app ) {
  const skyer = this;

  app.proxy = true;

// render
  app.context.render = render({
    root: skyer.options.view_path,
    autoescape: true,
    // disable, set to false or 'memory'
    cache: app.env === 'production' ? 'memory' : false,
    ext: 'html',
    // locals: '',
    writeBody: true,
    //filters: filters,
    //tags: tags,
    //extensions: extensions
  });
};

