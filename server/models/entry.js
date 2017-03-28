'use strict';

module.exports = function(Entry) {
  Entry.addentry = function(name, score, cb) {
    Entry.create({name: name, score: score}, function(err, entry) {
      if (err) throw err;
      console.log('Models created: \n', entry);
    });

    cb(null, 'Adding… ' + name + '-' + score);
  };

  Entry.remoteMethod(
    'addentry', {
      http: {
        path: '/addentry', verb: 'get',
      },
      accepts: [
        {arg: 'name', type: 'string'},
        {arg: 'score', type: 'number'},
      ],
      returns: {arg: 'result', type: 'string'},
    }
  );
};
