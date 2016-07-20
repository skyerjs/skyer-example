'use strict';

module.exports = {
  title: 'skyer-dev',

  mockUser: {
    enabled: true,
    user: {
      id: 1000,
      name: 'jerrywu',
      email: 'perzy_wu@163.com'
    }
  },

  redis: {
    host: 'localhost',
    port: 6379
  },

  mysql: {
    name: 'dev:mysql',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'skyer',
    charset: 'UTF8MB4',

    debug: [/*'OkPacket', 'ComQueryPacket' */],
    log: false
  }
};
