const pg = require("pg");

const config = {
  user: 'chaihdtbxmbojd',
  database: 'deddpmbpusq91m',
  password: 'xyx_yourpassword_xyz',
  host: 'ec2-54-83-56-31.compute-1.amazonaws.com',
  port: 5432,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
};

const pool = new pg.Pool(config);


pool.connect(function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }

  console.log("qaqaqaqa");

  done();
});

pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack)
});

module.exports = function (req, res) {




};