'use strict';

module.exports.middlewares = {
  default: true, // Load middlewares by default.

  // if default = false, will register middlewares by list config.
  list: [
    ['responseTime', 11],
    ['ejs', 5],
    {
      name: 'logger',
      order: 21,
      options: {}
    },
    {
      name: 'responseTime',
      order: 22
    },
    {
      name: 'cors',
      order: 16,
      options: {
        name: 'jerrywu'
      }
    },
    // this is invalid
    {
      name: 'nb',
      order: 16
    },
    {
      name: 'mockUser'
    }
  ]
};