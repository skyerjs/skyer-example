'use strict';

module.exports.components = [
  ['redisClient'],
  ['mongoClient'],
  ['sequelize'],

  // todo: support this method component register direct
  // load and register!
  [
    require('skyer-mysql-client-component'),
    // name,
    // options
  ],
  [
    require('skyer-mongoose-component')
  ],
  // todo: support this format
  /*  {
   name: 'redisClient',
   alias: 'redisclient',
   options: {}
   }*/
];