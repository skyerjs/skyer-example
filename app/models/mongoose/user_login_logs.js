'use strict';

module.exports = function ( mongoose, connection ) {
  const skyer = this.skyer; // this pointer is mongoose-component instance

  const schema = new mongoose.Schema({
    user_id: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    client_platform: {
      type: Number
    },
    device_token: {
      type: String
    },
    token: String,
    ip: String,
    ua: String,
    memo: String,
    created_at: {
      type: Date,
      default: new Date()
    }
  }, {
    comment: 'user login log model'
  });

  return connection.model('UserLoginLog', schema, 'user_login_logs');
};
