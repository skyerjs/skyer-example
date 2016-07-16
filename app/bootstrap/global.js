'use strict';

const globalAlias = {
  'moment': 'moment'
};

Object.keys(globalAlias).forEach(key => {
  global[key] = require(globalAlias[key]);
});