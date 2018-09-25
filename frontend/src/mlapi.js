var axios = require('axios');

var mlapi = {

  getMLResponse: function(jsonObj){

    return axios.post({method: 'post',
    url: 'https://ussouthcentral.services.azureml.net/workspaces/b3c1c6d865b14529bf0d84b4698dcc3d/services/b2874694d8f440dd866c2dbc0c254194/execute?api-version=2.0&details=true',
    headers: {'Postman-Token': '38bf5886-1ce3-47d3-837e-2de4e466e6c1'}, jsonObj})
        .then( function(res) {return {
            mlresponse: res.Results.output1.values[5]
        }
    })
  }
}

module.exports = mlapi;