'use strict';

module.exports.components = [
  ['redisClient'],
  ['mongoClient'],

  // todo: support this method component register direct
  // load and register!
  [
    require('skyer-mysql-client-component'),
    // name,
    // options
  ],
  // todo: support this format
/*  {
    name: 'redisClient',
    alias: 'redisclient',
    options: {}
  }*/
];