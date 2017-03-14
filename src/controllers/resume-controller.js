const pool = require("../utils/pool");

const table = "user_resume_slides";

module.exports = {

    show: (req, res) => {

        const {uuid} = req.params;

        pool.connect((err, client, done) => {
            if (err) {
                res.status(500).send('error fetching client from pool', err);
            }

            const query = "SELECT * FROM " + table + " WHERE uuid='" + uuid + "'";

            client.query(query, (err, result) => {
                done();

                if (err) {
                    res.status(500).send('error running query', err);
                }

                const resumeData = result.rows.length ? result.rows[0] : null;

                res.send(resumeData);
            });
        });
    },

    store: (req, res) => {
        const {uuid, slideId, slideSlug} = req.body;

        pool.connect((err, client, done) => {
            if (err) {
                res.status(500).send('error fetching client from pool');
            }

            const query = "INSERT INTO " + table + " (uuid, slide_id, slide_slug) VALUES ('" + uuid + "', '" + slideId + "', '" + slideSlug + "') ON CONFLICT (uuid) DO UPDATE SET slide_id='" + slideId + "', slide_slug='" + slideSlug + "'";
            client.query(query, err => {
                done();

                if (err) {
                    res.status(500).send('error running query');
                }

                res.json({
                    success: true
                });
            });
        });

    }

};