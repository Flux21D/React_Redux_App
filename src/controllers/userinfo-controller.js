const request = require('request');

module.exports = {

  userinfo: (req, res) => {

  		const {AccessToken} = req.query;
  		console.log('Inside')
  		var options = {
    		url: "https://elililly-dev.janraincapture.com/entity?type_name=user&access_token="+AccessToken,
    		method: 'GET'
		}
		console.log(AccessToken)
		request(options, function (error, response, body) {
			console.log(error)
			console.log(response)
			console.log(body)
    		if (!error && response.statusCode == 200) {
               console.log(body)
               res.json(body)
	        }
		})

  }

};