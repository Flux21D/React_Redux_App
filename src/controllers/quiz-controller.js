const pg = require("pg");
const pool = require("../utils/pool");

module.exports = {

  show: (req, res) => {

    const {uuid} = req.query;

    const query = "SELECT * FROM user_quiz_answers WHERE uuid='" + uuid + "'";

    pool.connect((err, client, done) => {
      if (err) {
        res.status(500).send('error fetching client from pool', err);
      }

      client.query(query, (err, result) => {
        done();

        if (err) {
          res.status(500).send('error running query', err);
        }

        const data = result.rows;

        res.send(data);
      });
    });
  },

  store: (req, res) => {

        // instantiate a new client
        // the client will read connection information from
        // the same environment variables used by postgres cli tools

    const query = "INSERT INTO user_quiz_answers (uuid, question_id, question, answer_id, answer, is_correct) VALUES ('" + req.body.uuid + "', '" + req.body.questionId + "', '" + req.body.question + "', '" + req.body.answerId + "', '" + req.body.answer + "', '" + req.body.isCorrect + "') ON CONFLICT (uuid, question_id) DO UPDATE SET answer_id='"+req.body.answerId+"', answer='"+req.body.answer+"', is_correct='"+req.body.isCorrect+"'";

    pool.connect((err, client, done) => {
      if (err) {
        res.status(500).send('error fetching client from pool', err);
      }

      client.query(query, err => {
        done();

        if (err) {
          res.status(500).send('error running query', err);
        }

        res.json({
          success: true
        });
      });
    });

  }

};