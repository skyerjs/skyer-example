'use strict';

class DbController extends Skyer.Controller {
  constructor() {
    super();
  }

  index() {
    return function* () {
      this.body = '/db';
    };
  }

  mysqlTest() {
    return function*() {
      const mysqlClient = skyer.component.get('mysqlClient');

      const sql = 'SELECT * FROM users limit 0,20;';

      this.body = yield mysqlClient.queryRows(sql);
    };
  }

  sequelizeTest() {
    return function* () {
      const sequelize = skyer.component.get('sequelize');

      const UserModel = sequelize.model('User');

      console.log(sequelize.isDefined('User'));

      this.body = yield UserModel.create({
        name: 'jerry wu',
        organization: 'skyer-team'
      });
    };
  }

  redisTest() {
    return function* () {

      const redisClient = skyer.component.get('redisClient');

      yield redisClient.set('skyer', Skyer.version);

      const version = yield redisClient.get('skyer');

      this.body = 'skyer version:' + version;
    };
  }

  mongoTest() {
    return function* () {
      const mongoClient = skyer.component.get('mongoClient');

      const collection = mongoClient.collection('users');

      const document = {
        name: 'test',
        created_at: new Date()
      };

      // insert
      yield collection.insert(document);

      // query
      const users = yield collection.find({}).skip(1).limit(1).project({ name: 1, created_at: 1 }).toArray();

      this.body = users;
    };
  }

  mongooseTest() {
    return function* () {
      const mongoose = require('mongoose');

      const mongooseConn = skyer.component.get('mongoose');

      const blogSchema = new mongoose.Schema({
        title: String,
        author: String,
        body: String,
        comments: [{ body: String, date: Date }],
        date: { type: Date, default: Date.now },
        hidden: Boolean,
        meta: {
          votes: Number,
          favs: Number
        }
      });

      const Blog = mongooseConn.model('Blog', blogSchema);

      const blog = yield Blog.create({
        title: 'test',
        author: 'jerrywu',
        body: 'hello skyer'
      });

      this.body = blog;
    };
  }

  mongooseModelTest() {
    return function* () {
      const mongooseConn = skyer.component.get('mongoose');

      const UserLoginLogModel = mongooseConn.model('UserLoginLog');

      const log = yield UserLoginLogModel.create({
        user_id: 1000,
        type: 'login',
        ip: '192.168.1.100',
        ua: 'xxx'
      });

      this.body = log;
    };
  }
}

module.exports = DbController;