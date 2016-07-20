'use strict';

module.exports.middlewares = {
  default: true, // Load middlewares by default.

  // if default = false, will register middlewares by list config.
  list: [
    ['responseTime', 11],
    {
      name: 'logger',
      order: 21
    },
    {
      name: 'responseTime',
      order: 22
    },
    {
      name: 'cors',
      order: 16
    },
    // this is invalid
    {
      name: 'nb',
      order: 16
    }
  ]
};