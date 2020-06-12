//oracleserver.js
//Oracle Server 2 using Hash.js to read transactions emit API to oracle.js 
//To be finished

import request from "request-promise-native";
import hash from "hash.js";

import {
  updateRequest,
  newRequest
} from "./etherserver.js";

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

async function main() { //To be finished
	const data.memo
	const data.topicId
	const data.message
	hash.triggerMessageSubmit(data, (err,res)=>{
	  if(err){
	      //error case
	      console.log('Error:::',err);
	  }else{
	      //success case
	      console.log('Success:::',res);
	  }
	});
}


main()