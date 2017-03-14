const client = require("../../utils/contentful");

module.exports = function (req, res) {

    let version = req.params.version;

    client.getEntries({
        'sys.contentType.sys.id': 'slide'
    }).then(entries => {

        let slides = entries.items.filter(entry => {

            if (version === "full") {
                return true;
            } else if (version === "fast-track" && entry.fields.version === 2) {
                return true;
            }

        }).map(entry => {
            return entry.fields;
        });

        res.json(slides);

    }).catch(err => {
        res.json(err);
    });

};