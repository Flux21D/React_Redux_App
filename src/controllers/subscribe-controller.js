const axios = require("axios");
const configs = require("../configs/janrain");

module.exports = {

    subscribe: (req, res) => {
        const {access_token, uuid} = req.body;

        let reqUrl = 'https://' + configs.APP_DOMAIN + '.janraincapture.com/entity.update';

        reqUrl += '?type_name=user' +
            '&access_token=' + access_token +
            '&uuid=' + uuid +
            '&attributes={"termsAndCondition":{"newsletterSubscription":"patientONews"}}';

        const request = axios.get(reqUrl);

        request.then(response => {

            if (response.data.stat === "ok") {
                return res.json({
                    success: true,
                    msg: "You were subscribed to the newsletter successfully."
                });
            }

            res.status(500).send({
                success: false,
                msg: "Something went wrong."
            });

        }).catch(error => {
            res.status(500).send({
                success: false,
                msg: "Something went wrong."
            });
        });

    }

};