module.exports = {
  host: process.env.PG_HOST || "ec2-54-247-81-76.eu-west-1.compute.amazonaws.com",
  database: process.env.PG_DATABASE || "d3ua18ld8tb3hd",
  user: process.env.PG_USER || "xiysnqltgeszbz",
  password: process.env.PG_PASSWORD || "9b4aacd45cf0b43f2eb135afe94fc4932f9cf441d810a8c0c624cbcda089fe92",
  port: process.env.PG_PORT || "5432",
  ssl: process.env.PG_SSL || true,
  max: process.env.PG_MAX_POOL_CLIENTS || 10, // max number of clients in the pool
  idleTimeoutMillis: process.env.PG_REMAIN_IDLE || 30000, // how long a client is allowed to remain idle before being closed
};