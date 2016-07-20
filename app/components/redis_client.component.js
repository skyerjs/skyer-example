'use strict';

const Redis = require('ioredis');

class RedisClientComponent extends Skyer.Component {
  constructor( name, options ) {
    super(name, options);
  }

  _getConfig() {
    return this.skyer.config.get('redis');
  }

  _build() {
    super._build();

    const redisDbConf = this.config || {};

    const redisClient = new Redis({
      host: redisDbConf.host,
      port: redisDbConf.port,
      db: redisDbConf.db || 0,
      password: redisDbConf.password || ''
    });

    redisClient.on('error', err => {
      this.emit('error', err);
    });

    return redisClient;
  }
}

module.exports = RedisClientComponent;
