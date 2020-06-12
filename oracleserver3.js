//oracleserver3.js
//Armada Open Waters Topic read server
//Do Not include Open Waters Package

import {
  updateRequest,
  newRequest
} from "./ethserver.js";

const start = () => {

  newRequest((error, result) => {

    let options = {
      uri: result.args.urlToQuery,
      json: true
    };

    request(options)
      .then(parseData(result))
      .then(updateRequest)
      .catch(error);
  });
};

const parseData = result => (body) => {
  return new Promise((resolve, reject) => {
    let id, valueRetrieved;
    try {
      id = result.args.id;
      valueRetrieved = (body[result.args.attributeToFetch] || 0).toString();
    } catch (error) {
      reject(error);
      return;
    }
    resolve({
      id,
      valueRetrieved
    });
  });
};

aysnc function main(){
	// Open Waters call to check HCS records
}


main() 